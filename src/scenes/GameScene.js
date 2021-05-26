import Phaser from 'phaser';
import ScoreLabel from '../ui/ScoreLabel';
import BombMaker from './BombMaker';
import Score from '../api';

const GROUND = 'ground';
const NORA = 'nora';
const STAR = 'star';
const BOMB = 'bomb';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');

    this.gameOver = false;
  }

  preload() {
    this.load.image('sky', '../public/assets/sky.png');
    this.load.image(GROUND, '../public/assets/platform.png');
    this.load.image(STAR, '../public/assets/star.png');
    this.load.image(BOMB, '../public/assets/bomb.png');
    this.load.spritesheet(NORA, '../public/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.add.image(400, 300, 'sky');

    const platforms = this.createPlatforms();
    this.player = this.createPlayer();
    this.stars = this.createStars();

    this.scoreLabel = this.createScoreLabel(16, 16, 0);

    this.bombMaker = new BombMaker(this, BOMB);
    const bombsGroup = this.bombMaker.group;

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.stars, platforms);
    this.physics.add.collider(bombsGroup, platforms);
    this.physics.add.collider(this.player, bombsGroup, this.hitBomb, null, true);

    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    const nameForm = document.querySelector('#nameForm');
    const p = document.createElement('p');
    p.fontSize = '120px';
    p.style.color = 'white';
    p.style.fontWeight = 'bold';
    p.innerHTML = 'Game Over ';
    nameForm.prepend(p);
    nameForm.style.display = 'none';
    const submit = document.querySelector('#submit');
    const name = document.querySelector('#name');
    this.user = name.value;
    const myScore = new Score();
    submit.addEventListener('click', () => {
      const data = { user: this.user, score: this.game.global.score };
      myScore.postData(data);
      nameForm.style.display = 'none';
      this.scene.start('Title');
    });
  }


  update() {
    if (this.gameOver) {
      return;
    }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-300);
    }
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, GROUND).setScale(2).refreshBody();
    platforms.create(600, 400, GROUND);
    platforms.create(50, 250, GROUND);
    platforms.create(750, 220, GROUND);
    platforms.create(250, 90, GROUND);

    return platforms;
  }

  createPlayer() {
    const player = this.physics.add.sprite(100, 450, NORA);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    // player.body.setGravityY(300);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(NORA, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: NORA, frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(NORA, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    return player;
  }


  createStars() {
    const stars = this.physics.add.group({
      key: STAR,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    return stars;
  }

  collectStar(player, star) {
    star.disableBody(true, true);
    this.scoreLabel.add(10);
    this.game.global.score += 10;
    if (this.stars.countActive(true) === 0) {
      // A new batch of starts is created
      this.stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
      this.bombMaker.spawn(player.x);
    }
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);
    this.add.existing(label);
    return label;
  }

  hitBomb(player) {
    this.renderer('GameOver');
    document.querySelector('#nameForm').style.display = 'block';
    document.querySelector('#name').innerHTML = '';
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    this.gameOver = true;
  }
}