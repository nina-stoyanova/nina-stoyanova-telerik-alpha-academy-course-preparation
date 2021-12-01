function gameNumberWars(array) {
    let firstPerson = array.shift();//Desi
    let secondPerson = array.shift();//Niki

    let firstPersonPoints = 0;
    let secondPersonPoints = 0;

    while (array.length >= 1) {
        let element = array.shift();
        if (element === "End of game") {
            console.log(`${firstPerson} has ${firstPersonPoints} points`);
            console.log(`${secondPerson} has ${secondPersonPoints} points`);
            break;
        } else {
            element = Number(element);//7
            let firstPersonCard = element;//7
            let secondPersonCard = Number(array.shift());//5

            if (firstPersonCard > secondPersonCard) {
                firstPersonPoints = firstPersonPoints + (firstPersonCard - secondPersonCard);//0 = 0 + (7 - 5) -> 2
            } else if (secondPersonCard > firstPersonCard) {
                secondPersonPoints = secondPersonPoints + (secondPersonCard - firstPersonCard);
            } else {
                console.log(`Number wars!`);
                firstPersonPoints = 0;
                secondPersonPoints = 0;
                let one = Number(array.shift());
                let two = Number(array.shift());
                if (one > two) {
                    firstPersonPoints = one - two;
                    console.log(`${firstPerson} is winner with ${firstPersonPoints} points`);
                    return;
                } else {
                    secondPersonPoints = two - one;
                    console.log(`${secondPerson} is winner with ${secondPersonPoints} points`);
                    return;
                }
            }

        }

    }

}
// gameNumberWars(["Desi",
// "Niki",
// "7",
// "5",
// "3",
// "4",
// "3",
// "3",
// "5",
// "3"])
gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"]);

