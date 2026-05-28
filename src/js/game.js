export default function play(players) {
  const maxTurns = 100;
  let turnCount = 0;

  while (turnCount < maxTurns) {
    // Сначала считаем живых и определяем, не закончилась ли игра
    let aliveCount = 0;
    let alivePlayer = null;
    for (let i = 0; i < players.length; i += 1) {
      if (!players[i].isDead()) {
        aliveCount += 1;
        alivePlayer = players[i];
      }
    }
    if (aliveCount === 1) {
      console.log(`Winner: ${alivePlayer.description} ${alivePlayer.name}!`);
      return;
    }
    if (aliveCount === 0) {
      console.log('Game over: no players left. Draw!');
      return;
    }

    // Каждый живой игрок делает ход
    for (let i = 0; i < players.length; i += 1) {
      const player = players[i];
      if (!player.isDead()) {
        player.turn(players);
      }
    }

    turnCount += 1;
  }

  console.log('Game over: max turns reached. Draw!');
}