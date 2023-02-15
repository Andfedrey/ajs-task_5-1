import Character from './character';
import { checkingName } from './character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25
  }
}
