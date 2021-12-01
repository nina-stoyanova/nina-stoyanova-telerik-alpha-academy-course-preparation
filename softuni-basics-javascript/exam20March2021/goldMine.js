function goldMine(array) {

    let locationsCount = Number(array.shift());//2


    for (let i = 1; i <= locationsCount; i++) {//1,2
        let expectedAverageGold = Number(array.shift());//10 20
        let workingDays = Number(array.shift());//3 2

        let realGoldSummery = 0;//30
        for (let j = 1; j <= workingDays; j++) {//1,2,3
            let realGold = Number(array.shift());//10,10,11
            realGoldSummery = realGoldSummery + realGold;
        }

        let averageRealGold = realGoldSummery / workingDays;//10.33

        let diff = expectedAverageGold - averageRealGold;
        if (diff > 0) {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        } else {           
            console.log(`Good job! Average gold per day: ${averageRealGold.toFixed(2)}.`);
        }

    }


}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);