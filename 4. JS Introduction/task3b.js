/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Simulasi game
 */

const battle = (player1, player2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const player1Skill =
        player1.skills[Math.floor(Math.random() * player1.skills.length)];
      const player2Skill =
        player2.skills[Math.floor(Math.random() * player2.skills.length)];
      player1.hp -= player2Skill.damage;
      player2.hp -= player1Skill.damage;
      console.log(`      ___---Bak buk Bak buk---___
${player1.name} launch ${player1Skill.name}! deals ${player1Skill.damage} damage!
${player2.name} launch ${player2Skill.name}! deals ${player2Skill.damage} damage!
${player1.name} hp: ${player1.hp}, ${player2.name} hp: ${player2.hp}
`);
      if (player1.hp > 0 && player2.hp > 0) {
        resolve(battle(player1, player2));
      } else if (player1.hp > 0) {
        resolve(`${player1.name} menang!`);
      } else if (player2.hp > 0) {
        resolve(`${player2.name} menang!`);
      } else {
        reject(
          new Error(
            `Pertarungan seri. ${player1.name} dan ${player2.name} butuh pengobatan.`
          )
        );
      }
    }, 1000);
  });
};

const player1 = {
  name: "Venusaur",
  hp: 100,
  skills: [
    { name: "Basic Attack", damage: 5 },
    { name: "Vine Whip", damage: 15 },
    { name: "Solar Beam", damage: 25 },
  ],
};
const player2 = {
  name: "Charizard",
  hp: 100,
  skills: [
    { name: "Basic Attack", damage: 5 },
    { name: "Wing Attack", damage: 15 },
    { name: "Fire Blast", damage: 25 },
  ],
};

battle(player1, player2)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
