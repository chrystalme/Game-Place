/**
 * @jest-environment jsdom
 */


import 'jest-canvas-mock';
import 'jest-expect-subclass';

import Phaser from 'phaser';
import GameOverScene from '../src/scenes/GameOverScene';

test('GameOverScene should be a subclass of Phaser.Scene', () => {
  expect(GameOverScene).not.toBeInstanceOf(Phaser.Scene);
});

test('GameOverScene should be a subclass of Phaser.Scene', () => {
  expect(GameOverScene).toBeSubclassOf(Phaser.Scene);
});