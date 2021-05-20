import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('boot');
  }

  preload() {
    this.load.image('logo', '../public/assets/logo.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
    this.scene.start('Preloader');
  }
}