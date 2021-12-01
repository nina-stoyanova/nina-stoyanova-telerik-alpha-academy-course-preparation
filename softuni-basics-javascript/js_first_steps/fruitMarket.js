

function fruitMarket (input){
    let strawberryPriceFor1Kilogram = Number(input[0]); //48kg
    let rasberryPriceFor1Kilogram = strawberryPriceFor1Kilogram / 2; //24kg
    let orangePriceFor1Kilogram = rasberryPriceFor1Kilogram - (0.4 * rasberryPriceFor1Kilogram); //14.399999999999999
    let bananasPriceFor1Kilogram = rasberryPriceFor1Kilogram - (0.8 * rasberryPriceFor1Kilogram); //4.799999999999997

    let rasberryFinalPrice = Number(input[3]) * rasberryPriceFor1Kilogram; // 156kg
    
    let orangeFinalPrice = Number(input[2]) * orangePriceFor1Kilogram; // 47.519999999999996
   
    let bananasFinalPrice = Number(input[1]) * bananasPriceFor1Kilogram;// 47.99999999999997

    let strawFinalPrice = Number(input[4]) * strawberryPriceFor1Kilogram; //81.6

    let summery = rasberryFinalPrice + orangeFinalPrice + bananasFinalPrice + strawFinalPrice; //333.11999999999995

    console.log(`${summery}`);

}



fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);