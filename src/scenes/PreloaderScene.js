import Phaser from 'phaser';
import TitleScene from './TitleScene';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {

  }

  create() {
    this.scene.start(TitleScene);
  }
}