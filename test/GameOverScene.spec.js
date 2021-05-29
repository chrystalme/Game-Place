/**
 * @jest-environment jsdom
 */

require('jest-canvas-mock');
require('jest-expect-subclass');

const Phaser = require('phaser');
const GameOver = require('../src/scenes/GameOverScene');

test('GameOverScene should be a subclass of Phaser.Scene', () => {
  expect(GameOver).toBeSubClassOf(Phaser.Scene);
});