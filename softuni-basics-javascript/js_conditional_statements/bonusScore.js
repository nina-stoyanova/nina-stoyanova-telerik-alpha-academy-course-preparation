function bonusScore(input) {
    let startingPoints = Number(input[0]); //2703

    let bonusPoints= 0;  //270.3
    let sumPoints= 0;//

    if (startingPoints <= 100) {
        bonusPoints = bonusPoints + 5;
    } else if (startingPoints >100 && startingPoints < 1000) {
        bonusPoints = startingPoints - (startingPoints * 0.8);
    } else if (startingPoints > 1000) {
        bonusPoints = startingPoints - (startingPoints * 0.9);
    }

    sumPoints = bonusPoints + startingPoints;//2973.3

    if (startingPoints % 2 == 0) {
        bonusPoints = bonusPoints + 1;
        sumPoints = sumPoints + 1;
    } else if (startingPoints % 10 == 5 ) {
        bonusPoints = bonusPoints + 2;
        sumPoints = sumPoints + 2;
    }

    console.log(bonusPoints);
    console.log(sumPoints);
}

//bonusScore(["20"]);
bonusScore(["15875"]);