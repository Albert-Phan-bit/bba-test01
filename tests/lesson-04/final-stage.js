function findPairsDivisibleBy17 () {
    let pairs = [];
    let count = 0;
    for (let i = 1; i < 101; i++) {
        for (let j = i +1; j < 101; j++) {
            if ((i + j) % 17 === 0) {
                console.log("(" + i + ", " + j + ") = ", i + j);
                count++;
            }
        }
    }
    console.log("\n Tổng cộng: " + count + " cặp.");
};

findPairsDivisibleBy17();
