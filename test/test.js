import Bowerman from '../src/bowerman';
import Daemon from '../src/daemon';
import Magician from '../src/magician';
import Swordsman from '../src/swordsman';
import Undead from '../src/undead';
import Zombie from '../src/zombie';

afterEach(() => {
  jest.restoreAllMocks();
});

test('Bowerman', () => {
  const bow = new Bowerman('pro100', 'Bowerman');
  expect(bow).toHaveProperty('name');
  expect(bow).toHaveProperty('type', 'Bowerman');
  expect(bow).toHaveProperty('health');
  expect(bow).toHaveProperty('level', 1);
  expect(bow).toHaveProperty('attack', 25);
  expect(bow).toHaveProperty('defence', 25);
});

test('Daemon', () => {
  const bow = new Daemon('Bob', 'Daemon');
  expect(bow).toHaveProperty('name');
  expect(bow).toHaveProperty('type', 'Daemon');
  expect(bow).toHaveProperty('health');
  expect(bow).toHaveProperty('level', 1);
  expect(bow).toHaveProperty('attack', 10);
  expect(bow).toHaveProperty('defence', 40);
});

test('Magician', () => {
  const bow = new Magician('Tom', 'Magician');
  expect(bow).toHaveProperty('name');
  expect(bow).toHaveProperty('type', 'Magician');
  expect(bow).toHaveProperty('health');
  expect(bow).toHaveProperty('level', 1);
  expect(bow).toHaveProperty('attack', 10);
  expect(bow).toHaveProperty('defence', 40);
});

test('Swordsman', () => {
  const bow = new Swordsman('Leo', 'Swordsman');
  expect(bow).toHaveProperty('name');
  expect(bow).toHaveProperty('type', 'Swordsman');
  expect(bow).toHaveProperty('health');
  expect(bow).toHaveProperty('level', 1);
  expect(bow).toHaveProperty('attack', 40);
  expect(bow).toHaveProperty('defence', 10);
});

test('Undead', () => {
  const bow = new Undead('Holly', 'Undead', 45, 1);
  expect(bow).toHaveProperty('name');
  expect(bow).toHaveProperty('type', 'Undead');
  expect(bow).toHaveProperty('health');
  expect(bow).toHaveProperty('level');
  expect(bow).toHaveProperty('attack');
  expect(bow).toHaveProperty('defence');
});

test('Zombie', () => {
  const bow = new Zombie('S', 'megaZombie');
  expect(bow).toHaveProperty('name');
  expect(bow).toHaveProperty('type');
  expect(bow).toHaveProperty('health', 100);
  expect(bow).toHaveProperty('level', 1);
  expect(bow).toHaveProperty('attack', 40);
  expect(bow).toHaveProperty('defence', 10);

  try {
    bow.checkingType();
  } catch (error) {
    expect(error.message).toBe('введен некорректный тип');
  }

  try {
    bow.checkingName();
  } catch (error) {
    expect(error.message).toBe('введенное имя некорректно');
  }
});

const tom = new Undead('tom', 'Undead');
test('level up', () => {
  const spy = jest.spyOn(tom, 'levelUp');
  const attackBefore = tom.attack;
  const defenceBefore = tom.defence;
  tom.health = 30;
  tom.levelUp();

  expect(spy).toHaveBeenCalled();
  expect(attackBefore < tom.attack).toBe(true);
  expect(defenceBefore < tom.defence).toBe(true);
  expect(tom.health === 100).toBe(true);
  expect(tom.level > 1).toBe(true);
});

test('damage', () => {
  const spy = jest.spyOn(tom, 'damage');
  const healthBefore = tom.health;
  tom.damage(12);
  expect(spy).toHaveBeenCalled();
  expect(tom.health < healthBefore).toBe(true);
});

test('dead hero', () => {
  const spy = jest.spyOn(tom, 'levelUp');
  tom.health = 0;

  expect(() => tom.levelUp()).toThrow(Error);
  try {
    tom.levelUp();
  } catch (error) {
    expect(error.message).toBe('показатель жизни равен 0');
  }
});
