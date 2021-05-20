import Phaser from 'phaser';
import '../style/style.scss';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import GameoverScene from './scenes/GameoverScene';
import TitleScene from './scenes/TitleScene';


const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [GameScene, BootScene, GameoverScene, PreloaderScene, TitleScene],
};

export default new Phaser.Game(config);