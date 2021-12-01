function bus(array) {
    let peopleCount = Number(array.shift());//20, 25,28,28,33,32,32
    let stopsCount = Number(array.shift());//2, 5

    let currentStop = 0;


    while (array.length >= 1) {
        let element = array.shift();
        if (element === "") {
            break;
        } else {
            let goingPeople = Number(element);//10,5,   14,9,10,6,10
            let commingPeople = Number(array.shift());//5,3   15,11,13,7,8
            currentStop = currentStop + 1;

            peopleCount = peopleCount + commingPeople;
            peopleCount = peopleCount - goingPeople;

            if (currentStop % 2 === 0) {
                peopleCount = peopleCount - 2;
            } else {
                peopleCount = peopleCount + 2;
            }
        }
    }

    console.log(`The final number of passengers is : ${peopleCount}`);


}
//bus(["20","2","10","5","5","3"]);
bus(["25", "5", "14", "15", "9", "11", "10", "13", "6", "7", "10", "8", " "]);
//bus(["17","3","6","7","8","9","3","4"]);


