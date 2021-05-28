// import Phaser from 'phaser';
import BombMaker from './scenes/BombMaker';

jest.mock('./scenes/BombMaker');

beforeEach(() => {
  BombMaker.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const bombMaker = new BombMaker();
  expect(bombMaker).toHaveBeenCalledTimes(1);
});