import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.scale.RESIZE,
    autocenter: Phaser.scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },

};
