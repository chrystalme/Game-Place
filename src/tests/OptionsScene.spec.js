
/**
 * @jest-environment jsdom
 */
const Scene = require('phaser');

const OptionsScene = require('../scenes/OptionsScene');


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('OptionsScene should be a subclass of Phase.Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Scene);
});