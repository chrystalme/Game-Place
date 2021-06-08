/**
 * @jest-environment jsdom
 */


import 'jest-canvas-mock';
import 'jest-expect-subclass';

import Phaser from 'phaser';
import CreditsScene from '../src/scenes/CreditsScene';

test('CreditsScene should be a subclass of Phaser.Scene', () => {
  expect(CreditsScene).not.toBeInstanceOf(Phaser.Scene);
});

test('CreditsScene should be a subclass of Phaser.Scene', () => {
  expect(CreditsScene).toBeSubclassOf(Phaser.Scene);
});