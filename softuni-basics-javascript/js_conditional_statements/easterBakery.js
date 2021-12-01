function easterBakery(input) {
    let flourPriceForOneKg = Number(input[0]);//50
    let flourKg = Number(input[1]);//10
    let sugarKg = Number(input[2]);//3.5
    let eggsCount = Number(input[3]);//6
    let packsOfMaq = Number(input[4]);//1

    let sugarPrice = flourPriceForOneKg - (flourPriceForOneKg / 100 * 25);
    let eggsPrice = flourPriceForOneKg + (flourPriceForOneKg / 100 * 10);
    let onePackOfMaq = sugarPrice - (sugarPrice / 100 * 80);

    let flourSum = flourPriceForOneKg * flourKg;
    let sugarSum = sugarKg * sugarPrice;
    let eggsSum = eggsCount * eggsPrice;
    let maqSum = packsOfMaq * onePackOfMaq;
    
    let sum = flourSum + sugarSum + eggsSum + maqSum;

    console.log(sum.toFixed(2));


}

easterBakery(["50","10","3.5","6","1"]);
easterBakery(["63.44","3.57","6.35","8","2"]);