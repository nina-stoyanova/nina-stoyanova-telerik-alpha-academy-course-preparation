function salary (array) {
    let openTabs = Number(array[0]);
    let incomeSalary = Number(array[1]);

    let fee = 0;
    for (let i = 2; i < array.length; i = i + 1) {// 2,3,4..8
        let element = array[i];

        switch (element) {
            case "Facebook":
                fee = fee + 150;
                break;
            case "Instagram":
                fee = fee + 100;
                break;
            case "Reddit":
                fee = fee + 50;
                break;
            default:
                fee = fee + 0;
                break;
        }
        
    }

    let diff = incomeSalary - fee;


    if (diff > 0) {
        let minus = Math.abs(diff);
        console.log(`${minus}`);
    } else {
        console.log(`You have lost your salary.`);
    }

}

salary["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]
