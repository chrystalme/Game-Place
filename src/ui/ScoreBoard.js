import score from '../api';

const Board = () => {
  const sortData = (data) => {
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


  const board = (arr) => {
    const board = document.querySelector('#leader-board');
    board.style.background = '#fff';
    board.style.display = 'grid';

    arr.slice(0, 10).forEach((item, i) => {
      const ranking = document.createElement('span');
      const name = document.createElement('span');
      const score = document.createElement('span');
      ranking.textContent = i + 1;
      name.textContent = item.user;
      score.textContent = item.score;
      board.appendChild(ranking);
      board.appendChild(name);
      board.appendChild(score);
    });
  };

  const create = () => {
    let data;
    score.getData().then((res) => {
      data = sortData(res.result);

      board(data);
    });
  };
  return { create };
};

export default Board;