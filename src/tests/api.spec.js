import Score from '../api';


jest.mock('../api');

const fakedata = [
  {
    name: 'kevin',
    score: 100,
  },
  {
    name: 'Matt',
    score: 150,
  },
];

const feedback = { result: 'Leaderboard score created correctly.' };
const score = new Score();
score.getData.mockResolvedValue(fakedata);
score.postData.mockResolvedValue(feedback);

test('the data ia an array', async () => {
  const data = await score.getData();
  expect(data).toEqual(fakedata);
});