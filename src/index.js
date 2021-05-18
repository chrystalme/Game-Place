import Phaser from '../js/phaser';
import '../style/style.scss';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,

  },
};

const game = new Phaser.Game(config);

const preload = () => {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', '../assets/star.png');
  this.load.image('bomb', '../assets/bomb.png');
  this.load.spritesheet('nora', '../assets/nora01.png', { frameWidth: 32, frameHeight: 48 });
};

const create = () => {

};

const update = () => {

};
