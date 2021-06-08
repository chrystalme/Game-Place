import Phaser from 'phaser';

export default class NameScene extends Phaser.Scene {
  constructor() {
    super('NameScene');
  }

  create() {
    this.displayForm();
  }

  displayForm() {
    document.querySelector('#nameForm').style.display = 'block';
    document.querySelector('#name').innerHTML = '';
    this.scene.start('Title');
  }
}