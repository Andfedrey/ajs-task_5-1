export default class Character {
  constructor(
    name,
    type,
    health,
  ) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('показатель жизни равен 0');
    }
  }

  damage(points) {
    if (this.health > 0) {
      return this.health -= points * (1 - this.defence / 100);
    }
  }

  checkingName() {
    const nameLength = this.name?.length;
    const nameType = typeof this.name;
    if (nameType !== 'string' || nameLength < 2 || nameLength > 10) {
      throw new Error('введенное имя некорректно');
    }
  }

  checkingType() {
    const arr = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(this.type)) {
      throw new Error('введен некорректный тип');
    }
  }
}
