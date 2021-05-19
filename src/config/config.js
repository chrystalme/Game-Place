import Phaser from 'phaser';
import BootScene from '../scenes/BootScene';
import GameScene from '../scenes/GameScene';
import PreloaderScene from '../scenes/PreloaderScene';
import TitleScene from '../scenes/TitleScene';

const config = {
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
    scene: [BootScene, PreloaderScene, TitleScene, GameScene],
  },

};

export default config;