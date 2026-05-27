const characters = [
  { name: 'warrior', health: 10 },
  { name: 'mage', health: 100 },
  { name: 'mage', health: 0 },
  { name: 'archer', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);
console.log(alive);