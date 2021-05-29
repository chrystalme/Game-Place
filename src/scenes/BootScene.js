import Phaser from 'phaser';
import { clone } from 'lodash';
import globals from '../globals/index.js';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', '../../assets/zenva_logo.png');
  }

  create() {
    this.initGlobalVariables();
    this.scene.start('Preloader');
  }

  initGlobalVariables() {
    this.game.global = clone(globals);
  }
}