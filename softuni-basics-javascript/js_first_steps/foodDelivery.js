


function foodDelivery(inputData) {
    let sumChickenMenu = Number(inputData[0]);//2
    let sumFishMenu = Number(inputData[1]);//4
    let sumVeggieMenu = Number(inputData[2]);//3

    let chickenMenuPrice = sumChickenMenu * 10.35;//20.70
    let fishMenuPrice = sumFishMenu * 12.40; //49.60
    let veggieMenuPrice = sumVeggieMenu * 8.15;//24.45

    let sumOfAllMenues = chickenMenuPrice + fishMenuPrice + veggieMenuPrice; //94.75

    let desert = sumOfAllMenues * 0.2;

    let allSum = sumOfAllMenues + desert + 2.5;
    let fixedSum = allSum.toFixed(2);
    console.log(`Total: ${fixedSum}`);

}


foodDelivery(["1","1","1"]);