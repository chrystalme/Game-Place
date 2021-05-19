import Phaser from 'phaser';
import '../style/style.scss';
// import config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';


// function preload() {
//   this.load.image('sky', '../assets/sky.png');
//   this.load.image('ground', '../assets/platform.png');
//   this.load.image('star', '../assets/star.png');
//   this.load.image('bomb', '../assets/bomb.png');
//   this.load.spritesheet('nora', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
// }

// function collectStar(player, stars) {
//   stars.disableBody(true, true);

//   score += 5;
//   scoreText.setText(`Score: ${score}`);
//   if (stars.countActive(true) === 0) {
//     stars.children.iterate((child) => {
//       child.enableBody(true, child.x, 0, true, true);
//     });
//     const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
//     const bomb = bombs.create(x, 16, 'bomb');
//     bomb.setBounce(1);
//     bomb.setCollideWorldBounds(true);
//     bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//   }
// }

// function hitBomb(player, bomb) {
//   this.physics.pause();
//   player.setTint(0xff0000);
//   player.anims.play('turn');
//   gameOver = true;
// }

// function create() {
//   this.add.image(0, 0, 'sky').setOrigin(0, 0);
//   // Create platform group of static objects
//   platforms = this.physics.add.staticGroup();
//   platforms.create(400, 568, 'ground').setScale(2).refreshBody();
//   platforms.create(600, 400, 'ground');
//   platforms.create(50, 250, 'ground');
//   platforms.create(750, 220, 'ground');
//   platforms.create(450, 50, 'ground');

//   player = this.physics.add.sprite(100, 450, 'nora');
//   player.setBounce(0.2);
//   player.setCollideWorldBounds(true);
//   player.body.setGravityY(300);
//   player.physics.add.collider(player, platforms);

//   this.anims.create({
//     key: 'left',
//     frames: this.anims.generateFrameNumbers('nora', { start: 0, end: 3 }),
//     frameRate: 10,
//     repeat: -1,
//   });

//   this.anims.create({
//     key: 'turn',
//     frames: [{ key: 'nora', frame: 4 }],
//     frameRate: 20,
//   });

//   this.anims.create({
//     key: 'right',
//     frames: this.anims.generateFrameNumbers('nora', { start: 5, end: 8 }),
//     frameRate: 10,
//     repeat: -1,
//   });
//   // create starts group
//   stars = this.physics.add.group({
//     key: 'star',
//     repeat: 11,
//     setXY: { x: 12, y: 0, stepX: 70 },
//   });

//   stars.children.iterate((child) => {
//     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//   });
//   this.physics.add.collider(stars, platforms);
//   this.physics.add.overlap(player, stars, collectStar, null, this);

//   scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

//   // create bomb group
//   bombs = this.physics.add.group();
//   this.physics.add.collider(bombs, platforms);
//   this.physics.add.collider(player, bombs, hitBomb, null, this);

//   cursors = this.input.keyboard.createCursorKeys();
// }

// function update() {
//   if (cursors.left.isDown) {
//     player.setVelocityX(-160);
//     player.anims.play('left', true);
//   } else if (cursors.right.isDown) {
//     player.setVelocityX(160);
//     player.anims.play('right', true);
//   } else {
//     player.setVelocityX(0);
//     player.anims.play('turn');
//   }

//   if (cursors.up.isDown && player.body.touching.down) {
//     player.setVelocityY(-300);
//   }
// }

// const config = {
//   type: Phaser.AUTO,
//   parent: 'content',
//   width: 800,
//   height: 600,
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: { y: 300 },
//       debug: false,
//     },
//   },
//   scene: {
//     preload,
//     create,
//     update,

//   },
// };

// // eslint-disable-next-line no-unused-vars
// const game = new Phaser.Game(config);


// class Game extends Phaser.Game {
//   constructor() {
//     super(config);
//     this.scene.add('Game', GameScene);
//     this.scene.add('Boot', BootScene);
//     this.scene.add('Preloader', PreloaderScene);
//     this.scene.start('Boot');
//   }
// }

// window.onload = function () {
//   window.game = new Game();
// };

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [GameScene],
};

export default new Phaser.Game(config);