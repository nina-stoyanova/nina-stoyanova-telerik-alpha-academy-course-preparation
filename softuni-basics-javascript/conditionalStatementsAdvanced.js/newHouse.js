function newHouse (input) {
    let typeOfFlowers = input[0];//tulips
    let flowersCount = Number(input[1]);//88
    let budjet = Number(input[2]);//260

    let priceRoses = 5;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3;
    let priceGladiolus = 2.50;
 
    let rosesNeliBought = priceRoses * flowersCount;//275
    let dahliasNeliBought = priceDahlias * flowersCount;
    let tulipsNeliBought = priceTulips * flowersCount;//246.39999
    let narcissusNeliBought = priceNarcissus * flowersCount;
    let gladiolusNeliBought = priceGladiolus * flowersCount;

    let priceWithPercentages=0;


    if (typeOfFlowers === "Roses") {
        if (flowersCount > 80) {
            priceWithPercentages = rosesNeliBought - (rosesNeliBought / 100 * 10);
        } else {
            priceWithPercentages = rosesNeliBought;
        }
    } else if (typeOfFlowers === "Dahlias") {
        if (flowersCount > 90) {
            priceWithPercentages = dahliasNeliBought - (dahliasNeliBought / 100 * 15);
        } else {
            priceWithPercentages = dahliasNeliBought;
        }
    } else if (typeOfFlowers === "Tulips") {
        if (flowersCount > 80) {
            priceWithPercentages = tulipsNeliBought - (tulipsNeliBought / 100 * 15);
        } else {
            priceWithPercentages = tulipsNeliBought;
        }
    } else if (typeOfFlowers === "Narcissus") {
        if (flowersCount < 120) {
            priceWithPercentages = narcissusNeliBought + (narcissusNeliBought / 100 * 15);
        } else {
            priceWithPercentages = narcissusNeliBought;
        }
    } else if (typeOfFlowers === "Gladiolus") {
        if (flowersCount < 80) {
            priceWithPercentages = gladiolusNeliBought + (gladiolusNeliBought / 100 * 20);
        } else {
            priceWithPercentages = gladiolusNeliBought;
        }
    }

    

    if (budjet >= priceWithPercentages) {
        let difference = budjet - priceWithPercentages;
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeOfFlowers} and ${difference.toFixed(2)} leva left.`)
    } else {
        let diff = Math.abs(budjet - priceWithPercentages);
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }




    // let final = budjet - priceWithPercentages;//50.56
    

    // if (final > 0) {
    //    // let minusFinal = Math.abs(final);
    //     console.log(`Hey, you have a great garden with ${flowersCount} ${typeOfFlowers} and ${final.toFixed(2)} leva left.`);
    // } else {
    //     let minus = Math.abs(final);
    //     console.log(`Not enough money, you need ${minus.toFixed(2)} leva more.`);
    // }

}
//newHouse(["Roses","55","250"]);
//newHouse(["Tulips","88","260"]);
//newHouse(["Narcissus","119","360"]);
newHouse(["Dahlias","112", "460"]);
//newHouse(["Dahlias","98", "200"]);
//newHouse(["Gladiolus", "64", "160"]);
//newHouse(["Milena", "0", "100"]);


