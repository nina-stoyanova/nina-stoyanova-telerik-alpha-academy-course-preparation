function highJump(array) {
    let goal = Number(array.shift());//231sm
    let targetHeight = goal - 30;//201
    let jumpsSuccess = 0;
    let jumpsLost = 0;
    let attempts = 0;// from 0 - 3
    let achievedHeight = 0;

    //"200","202","200","200","207"

    while (array.length >= 1) {//3.2.1
        let element = Number(array.shift());//200,200,200,     205,212...235

        if (element > targetHeight) {
            achievedHeight = targetHeight;
            targetHeight = targetHeight + 5;
            attempts = 0;
            jumpsSuccess = jumpsSuccess + 1;
        } else {
            jumpsLost = jumpsLost + 1;
            attempts = attempts + 1;
            if (attempts === 3) {
                console.log(`Tihomir failed at ${targetHeight}cm after ${jumpsLost + jumpsSuccess} jumps.`);
                return;
            }

        }



    }

    console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpsSuccess} jumps.`);

}

highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
highJump(["231", "200", "200", "200"]);
highJump(["231", "200", "202", "200", "200", "207"]);
