import Phaser from 'phaser';
import Score from '../api';
// import Board from '../ui/ScoreBoard';


export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;

    this.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: 48 }).setOrigin(0.5);
    this.input.keyboard.once('keydowm-SPACE', () => {
      this.scene.start('Game');
    });
    const myScore = new Score();
    const data = myScore.getData();
    console.log(data);
    // const board = document.querySelector('#table-body');

    // for (let i = 0; i < data.result.length; i += 1) {
    //   const tr = document.createElement('tr');
    //   const ranking = document.createElement('td');
    //   const name = document.createElement('td');
    //   const score = document.createElement('td');
    //   ranking.textContent = i + 1;
    //   name.textContent = data.result[i].user;
    //   score.textContent = data.result[i].score;
    //   tr.appendChild(name);
    //   tr.appendChild(score);
    //   tr.appendChild(ranking);
    //   board.appendChild(tr);
    // }


    //   arr./* slice(0, 10). */forEach((item, i) => {
    //     const ranking = document.createElement('span');
    //     const name = document.createElement('span');
    //     const score = document.createElement('span');
    //     ranking.textContent = i + 1;
    //     name.textContent = item.user;
    //     score.textContent = item.score;
    //     board.appendChild(ranking);
    //     board.appendChild(name);
    //     board.appendChild(score);
    //   });
    setInterval(() => {
      // eslint-disable-next-line no-unused-expressions
      // this.destroy;
      this.scene.start('Title');
    }, 3000);
  }

  // sortData = (data) => {
  //   const myArr = data;
  //   for (let i = 0; i < myArr.length; i += 1) {
  //     for (let j = 0; j < myArr.length - 1; j += 1) {
  //       if (myArr[j].score < myArr[j + 1].score) {
  //         const tmp = myArr[j];
  //         myArr[j] = myArr[j + 1];
  //         myArr[j + 1] = tmp;
  //       }
  //     }
  //   }
  //   return myArr;
  // };

  // board = (arr) => {
  //   const board = document.querySelector('#leader-board');
  //   board.style.background = '#fff';
  //   board.style.display = 'grid';

  //   arr.slice(0, 10).forEach((item, i) => {
  //     const ranking = document.createElement('span');
  //     const name = document.createElement('span');
  //     const score = document.createElement('span');
  //     ranking.textContent = i + 1;
  //     name.textContent = item.user;
  //     score.textContent = item.score;
  //     board.appendChild(ranking);
  //     board.appendChild(name);
  //     board.appendChild(score);
  //   });
  // };
}