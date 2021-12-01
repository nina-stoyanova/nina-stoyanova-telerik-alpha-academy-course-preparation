function walking(array) {

    let goal = 10000;
    let stepsCount = 0;


    while (array.length >= 1) {
        let element = array.shift();//1500,3000,250,1548,2000,"Going home",2000

        if (element === "Going home") {
            stepsCount = stepsCount + 0;
        } else {
            element = Number(element);
            stepsCount = stepsCount + element;
        }


    }


    let diff = goal - stepsCount;

    if (diff > 0) {
        console.log(`${diff} more steps to reach goal.`);
    } else {
        let removeMinus = Math.abs(diff);
        console.log(`Goal reached! Good job!`);
        console.log(`${removeMinus} steps over the goal!`);
    }

}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

// walking(["1500",
//     "3000",
//     "250",
//     "1548",
//     "2000",
//     "Going home",
//     "2000"])
// walking(["1000",
//     "1500",
//     "2000",
//     "6500"]);
//     walking(["1000",
//     "1500",
//     "2000",
//     "6"]);
