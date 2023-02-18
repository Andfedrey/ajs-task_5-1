import Character, { checkingName, checkingType } from './character';

export default class Zombie extends Character {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}
