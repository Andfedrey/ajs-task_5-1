import Character from './character';
import { checkingName, checkingType } from './character';

export default class Magician extends Character {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}
