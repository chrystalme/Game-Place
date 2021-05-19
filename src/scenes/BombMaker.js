import Phaser from 'phaser';

export default class BombMaker {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene, bombKey = 'bomb') {
    this.scene = scene;
    this.key = bombKey;
    // Originally this._group ??
    this.group = this.scene.physics.add.group();
  }

  getGroup() {
    // Originally this._group ??
    return this.group;
  }

  spawn(playerX = 0) {
    const x = (playerX < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    const bomb = this.group.create(x, 16, this.key);
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    return bomb;
  }
}