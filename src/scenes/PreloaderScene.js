import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {

  }

  create() {
    this.scene.start('game-scene');
  }
}