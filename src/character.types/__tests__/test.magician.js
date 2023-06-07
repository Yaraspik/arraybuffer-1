import Magician from '../magician';

test('Magician attack through three cells', () => {
  const character = new Magician('Miyagi', 'Magician');
  character.distance = 2;
  expect(character.attack).toBe(9);
});

test('Magician attack through three cells with stoned', () => {
  const character = new Magician('Miyagi', 'Magician');
  character.attack = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});
