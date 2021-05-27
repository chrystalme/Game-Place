import Phaser from 'phaser';

import ScoreBoard from '../ui/ScoreBoard';
import config from '../config/config';


export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  // preload() {
  //   this.key = 'w2QrElL4pZZ70MTwdThv';
  //   const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.key}/scores/`;

  //   const rData = async () => {
  //     const response = await fetch(url);
  //     const data = response.json();
  //     return data;
  //   };

  //   const myData = rData();
  //   console.log(myData.result.length);
  // }

  create() {
    this.add.image(config.width / 2, config.height / 2, 'board').setScale(2);
    this.add.text(config.width / 2 - 130, config.height / 2 - 280, 'Top 10 Players', {
      color: '#fff',
      fontFamily: 'Arial',
      fontSize: '30px',
      fontStyle: 'bolder',
    });
    // const scoreView = document.querySelector('#score-board');
    // scoreView.style.display = 'block';
    // const score = new ScoreBoard();
    // score.create();
    // this.scene.start('Title');
    setInterval(() => {
      this.scene.start('Title');
    }, 5000);
  }
}