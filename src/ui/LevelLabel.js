import Phaser from 'phaser';

const formatScore = (level) => `Level: ${level}`;

export default class LevelLabel extends Phaser.GameObjects.Text {
  constructor(scene, x, y, level, style) {
    super(scene, x, y, formatScore(level), style);
    this.level = level;
  }

  setScore(level) {
    this.level = level;
    this.updateScoreText();
  }

  add(points) {
    this.setScore(this.level + points);
  }

  updateScoreText() {
    this.setText(formatScore(this.level));
  }
}