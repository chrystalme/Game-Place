import Phaser from 'phaser';
import Board from '../ui/ScoreBoard';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    setInterval(() => {
      this.destroy;
      this.scene.start('Title');
    }, 3000);
  }

  create() {
  }
}