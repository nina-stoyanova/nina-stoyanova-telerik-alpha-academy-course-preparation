function holiday(array) {

    let moneyForHoliday = Number(array.shift());//2000
    let currentMoney = Number(array.shift());//1000

    let passedDaysCount = 0;
    let consistancy = 0;

    while (array.length >= 1) {
        let action = array.shift();//"spend"
        let money = Number(array.shift());//1200"

        if (action === "spend") {
            currentMoney = currentMoney - money;
            if(currentMoney<0){
                currentMoney = 0;
            }
            consistancy = consistancy + 1;
            passedDaysCount = passedDaysCount + 1;
            if (consistancy >= 5) {
                console.log("You can't save the money.")
                console.log(`${passedDaysCount}`);
                return;
            }
        }
        if (action === "save") {
            currentMoney = currentMoney + money;
            passedDaysCount = passedDaysCount + 1;
            consistancy = 0;
        }

    }

    if (currentMoney >= moneyForHoliday) {
        console.log(`You saved the money for ${passedDaysCount} days.`);
    } else {
        console.log("You can't save the money.")
        console.log(`${passedDaysCount}`);
    }
}
holiday(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
