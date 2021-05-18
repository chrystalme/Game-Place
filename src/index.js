import '../style/style.scss';
import Phaser from '../js/phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update,

  },
};

const game = new Phaser.Game(config);

let platforms;

function preload() {
  this.load.image('sky', '../assets/sky.png');
  this.load.image('ground', '../assets/platform.png');
  this.load.image('star', '../assets/star.png');
  this.load.image('bomb', '../assets/bomb.png');
  this.load.spritesheet('nora', '../assets/nora01.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
  platforms.create(450, 50, 'ground');
}

function update() {

}
