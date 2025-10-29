let playerName = "Mario";
let currentLives = 3;

const coinLvl1 = 25;
const coinLvl2 = 30;
const coinLvl3 = 45;

let sumCoin = coinLvl1 + coinLvl2 + coinLvl3;
let avgCoin = sumCoin / 3;
console.log("Trung bình coin của 3 level: " + avgCoin);

let leftoverCoin = sumCoin % 3;
console.log("Số coin còn lại là: " + leftoverCoin);