export default function play(players) {
  let gameOver = false;
  const maxTurns = 100;
  let turnCount = 0;

  while (!gameOver && turnCount < maxTurns) {
    players.forEach(player => {
      if (player.isDead()) {
        return;
      }
      player.turn(players);
      const alivePlayers = players.filter(p => !p.isDead());
      if (alivePlayers.length === 1) {
        console.log('Winner: ' + alivePlayers[0].description + ' ' + alivePlayers[0].name + '!');
        gameOver = true;
      }
    });
    turnCount++;
  }

  if (!gameOver) {
    console.log('Game over: max turns reached. Draw!');
  }
}