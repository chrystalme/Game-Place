/**
 * @jest-environment jsdom
 */


import 'jest-canvas-mock';
import 'jest-expect-subclass';

import Phaser from 'phaser';
import BootScene from '../src/scenes/BootScene';

test('BootScene should be a subclass of Phaser.Scene', () => {
  expect(BootScene).not.toBeInstanceOf(Phaser.Scene);
});

test('BootScene should be a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});