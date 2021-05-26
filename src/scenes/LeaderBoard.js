import Phaser from 'phaser';
import Score from '../api';
// import Board from '../ui/ScoreBoard';


export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    // console.log(Board());
    const myScore = new Score();
    const data = myScore.getData();
    // console.log(data.result.length);
    const board = document.querySelector('#leader-board');
    board.style.background = 'green';
    board.style.display = 'grid';
    // const arr = this.sortData(data);
    // console.log(arr);
    for (let i = 0; i < data.result.length; i += 1) {
      const ranking = document.createElement('span');
      const name = document.createElement('span');
      const score = document.createElement('span');
      ranking.textContent = i + 1;
      name.textContent = data.result[i].user;
      score.textContent = data.result[i].score;
      board.appendChild(ranking);
      board.appendChild(name);
      board.appendChild(score);
    }


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
      this.destroy;
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