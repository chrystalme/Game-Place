import Phaser from 'phaser';
import TitleScene from './TitleScene';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('preloads', '../public/assets/logo.png');
  }

  create() {
    this.scene.start('title');
  }
}