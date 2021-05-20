import Phaser from 'phaser';
import '../style/style.scss';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import GameoverScene from './scenes/GameoverScene';
import TitleScene from './scenes/TitleScene';
// import postData from './api';


const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#333333',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [BootScene, TitleScene, PreloaderScene, GameScene, GameoverScene],
};

new Phaser.Game(config);
