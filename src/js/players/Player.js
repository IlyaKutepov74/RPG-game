import Arm from '../weapons/Arm';

export default class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Player';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
  }

  getLuck() {
    const randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    const weaponDamage = this.weapon.getDamage();
    return ((this.attack + weaponDamage) * this.getLuck()) / distance;
  }

  takeDamage(damage) {
    this.life = Math.max(0, this.life - damage);
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position -= moveDistance;
  }

  moveRight(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position += moveDistance;
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(-distance);
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    const blockChance = (100 - this.luck) / 100;
    return this.getLuck() > blockChance;
  }

  dodged() {
    const dodgeChance = (100 - this.agility - this.speed * 3) / 100;
    return this.getLuck() > dodgeChance;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    }
    if (this.dodged()) {
      return;
    }
    this.takeDamage(damage);
  }

  checkWeapon() {
    // to be overridden in subclasses
  }

  tryAttack(enemy) {
    const distance = Math.abs(this.position - enemy.position);
    if (distance > this.weapon.range) {
      return;
    }
    this.weapon.takeDamage(10 * this.getLuck());
    let damage = this.getDamage(distance);
    if (this.position === enemy.position) {
      damage *= 2;
      enemy.moveRight(1);
    }
    enemy.takeAttack(damage);
    this.checkWeapon();
  }

  chooseEnemy(players) {
    const enemies = players.filter((p) => p !== this && !p.isDead());
    if (enemies.length === 0) {
      return null;
    }
    enemies.sort((a, b) => a.life - b.life);
    return enemies[0];
  }

  moveToEnemy(enemy) {
    const distance = enemy.position - this.position;
    this.move(distance);
  }

  turn(players) {
    const enemy = this.chooseEnemy(players);
    if (!enemy) {
      return;
    }
    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }
}
