/**
 * @jest-environment jsdom
 */


 import 'jest-canvas-mock';
 import 'jest-expect-subclass';
 
 import Phaser from 'phaser';
 import GameScene from '../src/scenes/GameScene';
 
 test('GameScene should be a subclass of Phaser.Scene', () => {
   expect(GameScene).not.toBeInstanceOf(Phaser.Scene);
 });
 
 test('GameScene should be a subclass of Phaser.Scene', () => {
   expect(GameScene).toBeSubclassOf(Phaser.Scene);
 });