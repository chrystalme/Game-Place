import Phaser from 'phaser';
import OptionsScene from '../scenes/OptionsScene';


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('OptionsScene should be a subclass of Phase.Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
});