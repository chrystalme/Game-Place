
/**
 * @jest-environment jsdom
 */
import Phaser from 'phaser';

const { TestWatcher } = require('jest');
const OptionsScene = require('../scenes/OptionsScene');

TestWatcher('OptionsScene should be a subclass of Phase.Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
});