function zooShop (input) {
    let numberOfDogs = Number(input[0]);
    let numberOfOtherAnimals = Number(input[1]);

    numberOfDogs = numberOfDogs * 2.5;
    numberOfOtherAnimals = numberOfOtherAnimals * 4;
    let result = numberOfDogs + numberOfOtherAnimals;

    console.log(` ${result} lv.`);
}

zooShop(["5", "4"]);