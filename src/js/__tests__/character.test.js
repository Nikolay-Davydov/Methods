import Character from '../character';

test('get object Character', () => {
  const description = new Character('Man');
  const result = {
    name: 'Man', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});

test('error name min', () => {
  const description = () => new Character('1');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('error name max', () => {
  const description = () => new Character('SuperGiperPower');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('levelUp', () => {
  const description = new Character('Man');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'Man',
    health: 100,
    level: 2,
    attack: 12,
    defense: 12,
  };
  expect(description).toEqual(result);
});

test('levelUp health < 1', () => {
  const description = new Character('Man');
  description.health = 0;
  const error = () => description.levelUp();

  expect(error).toThrow(
    'нельзя повысить левел умершего',
  );
});

test('damage', () => {
  const description = new Character('Man');
  description.damage(50);

  expect(description.health).toBe(50 * (1 - description.defence / 100));
});

test('damage health < 0', () => {
  const description = new Character('Man');
  description.health = -50;
  const { health } = description;
  description.damage(50);
  expect(description.health).toBe(health);
});
