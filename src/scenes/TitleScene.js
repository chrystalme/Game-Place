import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  preload() {
    this.load.image('logo', '../assets/logo_t.png');
  }

  create() {
    this.scene.start('game-scene');
  }
}