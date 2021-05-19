import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('sky', '../public/assets/sky.png');
    this.load.image('ground', '../public/assets/platform.png');
    this.load.image('star', '../public/assets/star.png');
    this.load.image('bomb', '../public/assets/bomb.png');
    this.load.spritesheet('nora', '../public/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.add.image(400, 300, 'sky');
    // this.add.image(400, 300, 'star');
  }
}