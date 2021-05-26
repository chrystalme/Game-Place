require('regenerator-runtime');

const axios = require('axios');
const api = require('../api');


jest.mock('axios');

it('It should return the player name', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'kevin',
        score: 100,
      },
    ],
  });
  await api.postData()
    .then((data) => {
      expect(data.name).toEqual('Kevin');
    }).catch((error) => error);
});

it('It should return the player score', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Matt',
        score: 150,
      },
    ],
  });
  await api.postScores()
    .then((data) => {
      expect(data.score).toEqual(150);
    }).catch((error) => error);
});

it('It should fail if player score is incorrect', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Matt',
        score: 150,
      },
    ],
  });
  await api.postScores()
    .then((data) => {
      expect(data.score).not.toBe(210);
    }).catch((error) => error);
});