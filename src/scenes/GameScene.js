import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    
  }

  create() {
     var logo = this.add.image(400, 150, 'logo');
  }
}