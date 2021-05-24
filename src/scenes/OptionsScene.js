import Phaser from 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  preload() {
    console.log('Options Scene');
  }

  create() {
    console.log('create in Options scene');
  }
}