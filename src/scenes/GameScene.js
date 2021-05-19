import Phaser from 'phaser';

const GROUND = 'ground';
const NORA = 'nora';
const STAR = 'star';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('sky', '../public/assets/sky.png');
    this.load.image(GROUND, '../public/assets/platform.png');
    this.load.image(STAR, '../public/assets/star.png');
    this.load.image('bomb', '../public/assets/bomb.png');
    this.load.spritesheet(NORA, '../public/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'star');

    const platforms = this.createPlatforms();
    this.player = this.createPlayer();
    const stars = this.createStars();
    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(stars, platforms);
    // this.physics.add.overlap(this.player, stars, collectStar, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();
  }


  update() {
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
    platforms.create(350, 70, GROUND);

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
}