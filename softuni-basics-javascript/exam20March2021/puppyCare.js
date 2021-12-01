function puppyCare(array) {
    let dogFood = Number(array.shift());//4
    let dogFoodGrams = dogFood * 1000;//4000gr

    let eatenFood = 0;

    while (array.length >= 1) {
        let element = array.shift();
        if (element === "Adopted") {
            break;
        } else {
            let meal = Number(element);//130,345..
            eatenFood = eatenFood + meal;//1405gr
        }
    }

    let diff = dogFoodGrams - eatenFood;

    if (diff > 0) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else if(diff === 0) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else{
        let minus = Math.abs(diff);
        console.log(`Food is not enough. You need ${minus} grams more.`);
    }
}

puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"])
puppyCare(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])