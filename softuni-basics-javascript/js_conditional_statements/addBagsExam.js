function addBags (input) {

    let lugagePriceMoreThen20Kilos = Number(input[0]);//30lv/25.5
    let lugageKilos = Number(input[1]);//18kg/5
    let leftDaysToTheTrip = Number(input[2]);//15days/36
    let lugageCount = Number(input[3]);//2bags/6bags

    let lugageTax = 0;

    if (lugageKilos <= 10) {
        lugageTax = lugagePriceMoreThen20Kilos - (lugagePriceMoreThen20Kilos * 20 / 100)//30 / 100 * 20
    } 
    if (lugageKilos > 10 && lugageKilos <= 20) {
        lugageTax = lugagePriceMoreThen20Kilos - (lugagePriceMoreThen20Kilos / 100 * 50);//30/100*50
    }
    if (lugageKilos > 20) {
        lugageTax = lugagePriceMoreThen20Kilos;
    }

    if (leftDaysToTheTrip > 30) {
        lugageTax = lugageTax + (lugageTax / 100 * 10);//30 + 30/100 * 10 
    }
    if (leftDaysToTheTrip > 7 && leftDaysToTheTrip < 30) {//15%
        lugageTax = lugageTax + (lugageTax / 100 * 15);//30+30 /100 *15
    }
    if (leftDaysToTheTrip < 7) {
        lugageTax = lugageTax + (lugageTax / 100 * 40 );//30+ 30/100 *40
    }

    let finalPrice = lugageTax * lugageCount;
    

    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);

}

//addBags(["30","18","15","2"]);
addBags(["25.50","5","36","6"]);
//addBags(["63.8","23","3","1"]);