import Phaser from 'phaser';
import Score from '../api';
import config from '../config/config';


export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, 'board').setScale(2);
    this.add.text(config.width / 2 - 130, config.height / 2 - 280, 'Top 10 Players', {
      color: '#e3e3e3',
      fontFamily: 'Arial',
      fontSize: '30px',
      fontStyle: 'bolder',
    });
    const scoreView = document.querySelector('#leader-board');
    scoreView.style.display = 'block';
    // scoreBoard.create();
    // setInterval(() => {
    //   this.scene.start('Title');
    // }, 5000);

    const rData = async () => {
      const key = 'w2QrElL4pZZ70MTwdThv';
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
      const response = await fetch(url);
      const data = response.json();
      return data;
    };
    const data = rData();
    console.log(data.result.length);
  }

 

  // Board = () => {
  //   const sortData = (data) => {
  //     const myArr = data;
  //     for (let i = 0; i < myArr.length; i += 1) {
  //       for (let j = 0; j < myArr.length - 1; j += 1) {
  //         if (myArr[j].score < myArr[j + 1].score) {
  //           const tmp = myArr[j];
  //           myArr[j] = myArr[j + 1];
  //           myArr[j + 1] = tmp;
  //         }
  //       }
  //     }
  //     return myArr;
  //   };

  //   const board = (arr) => {
  //     const board = document.querySelector('#leader-board');
  //     board.style.background = 'blue';
  //     board.style.display = 'grid';

  //     arr.slice(0, 10).forEach((item, i) => {
  //       const ranking = document.createElement('span');
  //       const name = document.createElement('span');
  //       const score = document.createElement('span');
  //       ranking.textContent = i + 1;
  //       name.textContent = item.user;
  //       score.textContent = item.score;
  //       board.appendChild(ranking);
  //       board.appendChild(name);
  //       board.appendChild(score);
  //     });
  //   };

  //   const create = () => {
  //     let data;
  //     Score.getData().then((res) => {
  //       data = sortData(res.result);

  //       board(data);
  //     });
  //   };
  //   return { create };
  // };
}