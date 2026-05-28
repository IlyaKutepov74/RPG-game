import Player from './Player';
import Bow from '../weapons/Bow';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';

export default class Archer extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 35;
    this.attack = 5;
    this.agility = 10;
    this.description = 'Archer';
    this.weapon = new Bow();
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      if (this.weapon.name === 'Bow' || this.weapon.name === 'LongBow') {
        this.weapon = new Knife();
      } else if (this.weapon.name === 'Knife') {
        this.weapon = new Arm();
      }
    }
  }
}
