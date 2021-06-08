/**
 * @jest-environment jsdom
 */


import 'jest-canvas-mock';
import 'jest-expect-subclass';

import Phaser from 'phaser';
import TitleScene from '../src/scenes/TitleScene';

test('TitleScene should be a subclass of Phaser.Scene', () => {
  expect(TitleScene).not.toBeInstanceOf(Phaser.Scene);
});

test('TitleScene should be a subclass of Phaser.Scene', () => {
  expect(TitleScene).toBeSubclassOf(Phaser.Scene);
});