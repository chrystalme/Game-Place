import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    console.log('Bootscene preload');
    this.load.image('logo', '../public/assets/nora01.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
    this.scene.start('title');
  }
}