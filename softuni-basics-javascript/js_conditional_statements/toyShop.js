function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let bus = Number(input[5]);

    let puzzlePrice = 2.6;
    let dollsPrice = 3;
    let teddyBearsPrice = 4.1;
    let minionsPrice = 8.2;
    let busPrice = 2;

    let sumOfAllToys =(puzzle*puzzlePrice)+(dolls*dollsPrice)+(teddyBears*teddyBearsPrice)+(minions*minionsPrice)+(bus*busPrice);//680

    let toysCount = puzzle+dolls+teddyBears+minions+bus;//135
    
    let discount;//170
    if (toysCount >= 50) {
        discount = sumOfAllToys - (sumOfAllToys * 0.75);//170
    }else {
        discount = 0;
    }

    let totalSum = sumOfAllToys - discount;//510
    
    let rent = totalSum - (totalSum * 0.90);//51    

    let profit = totalSum - rent;//459
    
    
    let moneyDifference = profit - holidayPrice;//50 or -50
    let resultString = moneyDifference.toFixed(2);//"50.00" or "-50.00" 

    if (moneyDifference > 0) {
        console.log(`Yes! ${resultString} lv left.`);
    } else {
        resultString = resultString.substring(1);
        console.log(`Not enough money! ${resultString} lv needed.`);
    }



}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);

