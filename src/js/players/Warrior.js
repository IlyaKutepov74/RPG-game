import Player from './Player';
import Sword from '../weapons/Sword';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = 'Warrior';
    this.weapon = new Sword();
  }

  takeDamage(damage) {
    if (this.life < this.life * 0.5 && this.getLuck() > 0.8) {
      if (this.magic > 0) {
        const magicDamage = Math.min(this.magic, damage);
        this.magic -= magicDamage;
        return;
      }
    }
    super.takeDamage(damage);
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      if (this.weapon.name === 'Sword') {
        this.weapon = new Knife();
      } else if (this.weapon.name === 'Knife') {
        this.weapon = new Arm();
      }
    }
  }
}
