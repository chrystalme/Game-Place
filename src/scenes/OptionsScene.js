/* eslint-disable no-unused-vars */
import Phaser from 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.musicOn = true;
    this.soundOn = true;
    this.bgMusic = this.sound.add('bgMusic');

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.musicOn = !this.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.soundOn = !this.soundOn;
      this.updateAudio();
    });

    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', (pointer) => {
      this.scene.start('Title');
    });

    this.updateAudio();
  }

  updateAudio() {
    if (this.musicOn === false) {
      this.musicButton.setTexture('box');
      this.bgMusic.stop();
    } else {
      this.musicButton.setTexture('checkedBox');
      this.bgMusic.play();
    }

    if (this.soundOn === false) {
      this.soundButton.setTexture('box');
      this.bgMusic.stop();
    } else {
      this.soundButton.setTexture('checkedBox');
      this.bgMusic.play();
    }
  }
}