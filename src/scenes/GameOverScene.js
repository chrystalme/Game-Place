import Phaser from 'phaser';

export default class GameoverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;


    this.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: 48 }).setOrigin(0.5);
    this.add.text(width * 0.7, height * 0.7, 'Press spacebar to play again', { fontSize: 28 }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('Game');
    });
  }
}