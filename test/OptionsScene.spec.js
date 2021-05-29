/**
 * @jest-environment jsdom
 */


import 'jest-canvas-mock';
import 'jest-expect-subclass';

import Phaser from 'phaser';
import OptionsScene from '../src/scenes/OptionsScene';

test('OptionsScene should be a subclass of Phaser.Scene', () => {
  expect(OptionsScene).not.toBeInstanceOf(Phaser.Scene);
});

test('OptionsScene should be a subclass of Phaser.Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
});