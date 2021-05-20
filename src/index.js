// import Phaser from 'phaser';
// import '../style/style.scss';
// import GameScene from './scenes/GameScene';
// import BootScene from './scenes/BootScene';
// import PreloaderScene from './scenes/PreloaderScene';
// import GameoverScene from './scenes/GameoverScene';
// import TitleScene from './scenes/TitleScene';
// import postData from './api';


// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: { y: 200 },
//     },
//   },
//   scene: [GameScene, BootScene, GameoverScene, PreloaderScene, TitleScene],
// };

// const game = new Phaser.Game(config);

const postData = async (url = '', data = {}) => {
  // Default options are marked with *
  try {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    throw new Error(`API could not be reached: ${error}`);
  }
};
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const data = { name: "Junior jumper" };
console.log(postData(url, data));