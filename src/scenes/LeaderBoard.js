/* eslint-disable import/extensions */
import Phaser from 'phaser';
import config from '../config/config.js';


export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, 'board').setScale(2);
    this.add.text(config.width / 2 - 130, config.height / 2 - 280, 'Top 10 Players', {
      color: '#5d1512',
      fontFamily: 'Arial',
      fontSize: '30px',
      fontStyle: 'bolder',
    });
    const scoreView = document.querySelector('#result');
    scoreView.style.display = 'grid';
    this.returnData();
    setInterval(() => {
      this.scene.start('Title');
      scoreView.style.display = 'none';
    }, 5000);
  }

    sortData = (data) => {
      const myArr = data;
      for (let i = 0; i < myArr.length; i += 1) {
        for (let j = 0; j < myArr.length - 1; j += 1) {
          if (myArr[j].score < myArr[j + 1].score) {
            const tmp = myArr[j];
            myArr[j] = myArr[j + 1];
            myArr[j + 1] = tmp;
          }
        }
      }
      return myArr;
    };

    getData = async (url = '') => {
      const response = await fetch(url);
      return response.json(); // parses JSON response into native JavaScript objects
    }

    returnData = async () => {
      const key = 'w2QrElL4pZZ70MTwdThv';
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
      const result = document.getElementById('result');
      result.innerHTML = '';
      result.style.display = 'grid';
      const rData = await this.getData(url);
      const data = this.sortData(rData.result);
      const record = data.slice(0, 10);
      for (let i = 0; i < record.length; i += 1) {
        const pTag = document.createElement('span');
        pTag.innerHTML = `${i + 1} - ${record[i].user} : ${record[i].score}`;
        result.appendChild(pTag);
      }
    }
}