import Player from './Player';
import Staff from '../weapons/Staff';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';

export default class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = 'Mage';
    this.weapon = new Staff();
  }

  takeDamage(damage) {
    if (this.magic > this.magic * 0.5) {
      super.takeDamage(damage / 2);
      this.magic -= 12;
      return;
    }
    super.takeDamage(damage);
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      if (this.weapon.name === 'Staff' || this.weapon.name === 'StormStaff') {
        this.weapon = new Knife();
      } else if (this.weapon.name === 'Knife') {
        this.weapon = new Arm();
      }
    }
  }
}
