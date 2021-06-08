/* eslint-disable import/extensions */
import Score from '../src/api.js';

const testData = [
  { score: 200, user: 'Chrys' },
  { user: 'Chrys', score: 300 },
  { user: 'Price', score: 290 },
  { user: 'Ragheb', score: 150 },
  { user: 'Chrys', score: 340 },
  { score: 230, user: 'Malieze' },
  { user: 'Chrys', score: 500 },
  { score: 150, user: 'Andy' },
  { user: 'Joel', score: 180 },
  { score: 170, user: 'Chrystal' },
  { user: 'Harry', score: 190 },
  { user: 'Veno', score: 170 },
  { user: 'Chrystal', score: 290 },
  { user: 'Fred', score: 130 },
  { user: 'Chrys', score: 230 },
  { user: 'Malieze', score: 440 },
  { score: 230, user: 'Chrys' },
  { score: 230, user: 'Danladi' },
  { score: 140, user: 'Chrys' },
  { user: 'Chrys', score: 500 },
  { score: 300, user: 'Andy' },
  { user: 'Chrys', score: 530 },
  { score: 140, user: 'Andy' },
  { score: 350, user: 'Joel' },
  { score: 320, user: 'Andy' },
  { user: 'Mila', score: 310 },
  { score: 270, user: 'Alfie' },
  { score: 170, user: 'Fatima' },
  { score: 220, user: 'Lota' },
  { score: 380, user: 'Chrys' },
  { user: 'Chrys', score: 150 },
  { score: 170, user: 'Fadi' },
  { score: 260, user: 'Andy' },
];

const myScore = new Score();
const data = { user: 'Me', score: 500 };

test('the data is array', async () => {
  const data = await myScore.getData;
  expect(data).not.toEqual(expect.objectContaining(testData));
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await myScore.postData(data);
  } catch (e) {
    expect(e).toStrictEqual(expect.anything());
  }
});