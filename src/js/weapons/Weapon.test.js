import Weapon from './Weapon';
import Arm from './Arm';
import Bow from './Bow';
import Sword from './Sword';
import Knife from './Knife';
import Staff from './Staff';
import LongBow from './LongBow';
import Axe from './Axe';
import StormStaff from './StormStaff';

describe('Weapon', () => {
  test('should create weapon with correct properties', () => {
    const weapon = new Weapon('Old Sword', 20, 10, 1);
    expect(weapon.name).toBe('Old Sword');
    expect(weapon.attack).toBe(20);
    expect(weapon.durability).toBe(10);
    expect(weapon.initDurability).toBe(10);
    expect(weapon.range).toBe(1);
  });

  test('takeDamage should reduce durability but not below 0', () => {
    const weapon = new Weapon('Old Sword', 20, 10, 1);
    weapon.takeDamage(5);
    expect(weapon.durability).toBe(5);
    weapon.takeDamage(50);
    expect(weapon.durability).toBe(0);
  });

  test('getDamage should return full attack if durability >= 30%', () => {
    const weapon = new Weapon('Old Sword', 20, 10, 1);
    expect(weapon.getDamage()).toBe(20);
    weapon.takeDamage(6);
    expect(weapon.durability).toBe(4);
    expect(weapon.getDamage()).toBe(20);
  });

  test('getDamage should return half attack if durability < 30%', () => {
    const weapon = new Weapon('Old Sword', 20, 10, 1);
    weapon.takeDamage(8);
    expect(weapon.durability).toBe(2);
    expect(weapon.getDamage()).toBe(10);
  });

  test('getDamage should return 0 if broken', () => {
    const weapon = new Weapon('Old Sword', 20, 10, 1);
    weapon.takeDamage(10);
    expect(weapon.durability).toBe(0);
    expect(weapon.getDamage()).toBe(0);
  });

  test('isBroken should return true only when durability is 0', () => {
    const weapon = new Weapon('Old Sword', 20, 10, 1);
    expect(weapon.isBroken()).toBe(false);
    weapon.takeDamage(10);
    expect(weapon.isBroken()).toBe(true);
  });
});

describe('Arm', () => {
  test('should have correct default properties', () => {
    const arm = new Arm();
    expect(arm.name).toBe('Arm');
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });

  test('takeDamage should not reduce durability', () => {
    const arm = new Arm();
    arm.takeDamage(100);
    expect(arm.durability).toBe(Infinity);
  });
});

describe('Bow', () => {
  test('should have correct default properties', () => {
    const bow = new Bow();
    expect(bow.name).toBe('Bow');
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.range).toBe(3);
  });
});

describe('Sword', () => {
  test('should have correct default properties', () => {
    const sword = new Sword();
    expect(sword.name).toBe('Sword');
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.range).toBe(1);
  });
});

describe('Knife', () => {
  test('should have correct default properties', () => {
    const knife = new Knife();
    expect(knife.name).toBe('Knife');
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.range).toBe(1);
  });
});

describe('Staff', () => {
  test('should have correct default properties', () => {
    const staff = new Staff();
    expect(staff.name).toBe('Staff');
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.range).toBe(2);
  });
});

describe('LongBow', () => {
  test('should inherit from Bow and override properties', () => {
    const longbow = new LongBow();
    expect(longbow.name).toBe('LongBow');
    expect(longbow.attack).toBe(15);
    expect(longbow.durability).toBe(200);
    expect(longbow.range).toBe(4);
  });
});

describe('Axe', () => {
  test('should inherit from Sword and override properties', () => {
    const axe = new Axe();
    expect(axe.name).toBe('Axe');
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.range).toBe(1);
  });
});

describe('StormStaff', () => {
  test('should inherit from Staff and override properties', () => {
    const storm = new StormStaff();
    expect(storm.name).toBe('StormStaff');
    expect(storm.attack).toBe(10);
    expect(storm.durability).toBe(300);
    expect(storm.range).toBe(3);
  });
});