import Phaser from '../js/phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update

  }
};

const game = new Phaser.Game(config);

const preload = () => {

};

const create = () => {

};

const update = () => {

};
