import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('logo', '../assets/logo_t.png');
  }

  create() {
    this.scene.start('Game');
  }
}