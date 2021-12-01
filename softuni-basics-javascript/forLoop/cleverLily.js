function cleverLily(input) {
    let lilyAge = Number(input[0]);//10years old
    let washingMachine = Number(input[1]);//170lv
    let priceOneToy = Number(input[2]);//6lv for one toy

    let oddBirthDays = 0;
    for (let i = 1; i <= lilyAge; i = i + 2) {//odd years 1,3,5,7,9
        oddBirthDays = oddBirthDays + 1;
    }
    let toySum = oddBirthDays * priceOneToy;


    let allGifts = [];
    let lastGift = 0;
    let stollenMoney = 0;
    for (let i = 2; i <= lilyAge; i = i + 2) {//even years 2,4,6
       lastGift = lastGift + 10;
    stollenMoney = stollenMoney + 1;
       allGifts.push(lastGift);  
    }



    let sumGifts = 0;
    for (let i = 0; i < allGifts.length; i = i+1) {//0,1,2
        let element = allGifts[i];//10,20,30
        sumGifts = sumGifts + element;
    }
    
    let final = sumGifts + toySum - stollenMoney;
    
    let diff = washingMachine - final;

    if (diff > 0) {
        console.log(`No! ${diff.toFixed(2)}`);
    } else {
        let minus = Math.abs(diff);
        console.log(`Yes! ${minus.toFixed(2)}`);
    }


    

}

cleverLily(["10", "170", "6"]);