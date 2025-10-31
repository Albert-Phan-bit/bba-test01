//01
function createCharacters (characters) {
    let characterPowerUp = characters.map((character) => (
        {
        name: character.name.toUpperCase(),
        level: character.level*2,
        health: character.health*3
        }
    ));
    characterPowerUp = characterPowerUp.filter(character => {
        return character.health > 1000});
    return characterPowerUp;

};

let characters = [
    {name: "Mario", level: 7, health: 600},
    {name: "Luigi", level: 6, health: 550},
    {name: "Peach", level: 5, health: 505},
    {name: "Yoshi", level: 4, health: 300},
    {name: "Toad", level: 8, health: 1000}
    ]

console.log(createCharacters(characters));


//02
function printLeaderboard (players) {
    let ranking = players.sort((playerA, playerB) => playerB.score - playerA.score);
    for (let i = 0; i < ranking.length - 1; i++) {
        const medals = ["(1) ", "(2) ", "(3) "];
        if(i < 3) {
            console.log(medals[i] + i + ". " + ranking[i].name + " - " + ranking[i].score + "pts");
        } else console.log("    " + i + ". " + ranking[i].name + " - " + ranking[i].score + "pts");
    };
}

const players = [
    {name: "Mario", score: 1000},
    {name: "Luigi", score: 900},
    {name: "Peach", score: 850},
    {name: "Yoshi", score: 800},
    {name: "Toad", score: 1200}
];

printLeaderboard(players);