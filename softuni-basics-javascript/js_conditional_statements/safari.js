function safary (input) {
    let budjet = Number(input[0]);//1000lv
    let gasLitreNeeded = Number(input[1]);//10liters
    let dayFromTheWeek = input[2];//"Sunday"

    let gasOneLitre = 2.1;//lv
    let exursovotPrice = 100;//lv
    
    let gasPrice = gasLitreNeeded * gasOneLitre;//21lv
    let gasPlusExcursovot = gasPrice + exursovotPrice;//121lv

    let discountPrice = 0;

    if (dayFromTheWeek === "Sunday") {
        discountPrice = gasPlusExcursovot - (gasPlusExcursovot / 100 * 20);//96.80lv
    } else if(dayFromTheWeek === "Saturday") {
        discountPrice = gasPlusExcursovot - (gasPlusExcursovot / 100 * 10);//s
    }

    let difference = budjet - discountPrice;

    if (difference > 0) {
        let minusBudjet = Math.abs(difference);
        console.log(`Safari time! Money left: ${minusBudjet.toFixed(2)} lv.`);
    } else {
        let minus = Math.abs(difference);
        console.log(`Not enough money! Money needed: ${minus.toFixed(2)} lv.`);
    }


}

//safary(["1000","10","Sunday"]);
safary(["120","30","Saturday"]);
