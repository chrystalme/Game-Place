/**
 * @jest-environment jsdom
 */


import 'jest-canvas-mock';
import 'jest-expect-subclass';

import Phaser from 'phaser';
import PreloaderScene from '../src/scenes/PreloaderScene';

test('PreloaderScene should be a subclass of Phaser.Scene', () => {
  expect(PreloaderScene).not.toBeInstanceOf(Phaser.Scene);
});

test('PreloaderScene should be a subclass of Phaser.Scene', () => {
  expect(PreloaderScene).toBeSubclassOf(Phaser.Scene);
});