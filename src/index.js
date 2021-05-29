import Phaser from 'phaser';
import '../style/style.scss';
import GameScene from './scenes/GameScene.js';
import BootScene from './scenes/BootScene.js';
import PreloaderScene from './scenes/PreloaderScene.js';
import GameOverScene from './scenes/GameOverScene.js';
import TitleScene from './scenes/TitleScene.js';
import config from './config/config.js';
import OptionsScene from './scenes/OptionsScene.js';
import CreditsScene from './scenes/CreditsScene.js';
import LeaderBoard from './scenes/LeaderBoard.js';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', LeaderBoard);
    this.scene.start('Boot');
  }
}
window.game = new Game();
