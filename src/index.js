import './css/style.css';
import play from './js/game';
import Warrior from './js/players/Warrior';
import Archer from './js/players/Archer';
import Mage from './js/players/Mage';
import Dwarf from './js/players/Dwarf';
import Crossbowman from './js/players/Crossbowman';
import Demiurge from './js/players/Demiurge';

const players = [
  new Warrior(0, 'Alyosha'),
  new Archer(2, 'Legolas'),
  new Mage(4, 'Gandalf'),
  new Dwarf(6, 'Gimli'),
  new Crossbowman(8, 'Ellie'),
  new Demiurge(10, 'Celebrimbor'),
];

play(players);
