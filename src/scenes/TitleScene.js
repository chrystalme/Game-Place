import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  create() {
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, "Welcome to Nora's place", { font: '48px Arial', fill: 'blue' });
    this.input.keyboard.once('keydowm-SPACE', () => {
      this.scene.start('preloader');
    });
  }
}