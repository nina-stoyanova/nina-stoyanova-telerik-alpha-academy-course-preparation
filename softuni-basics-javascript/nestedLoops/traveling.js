function traveling(array) {
    let currentDestination = array.shift();//"Greece"
    let destinationPrice = Number(array.shift());//"1000"

    let savedMoney = 0;

    while (array.length >= 1) {
        let element = array.shift();//"200","200"..."Spain"...

        if (isNaN(element) === false) { //ти различно от число ли си - не не съм различно, аз съм число
            let number = Number(element);//200
            if (destinationPrice === 0) {
                destinationPrice = number;
            } else {
                savedMoney = savedMoney + number;
            }
        } else {
            if (savedMoney >= destinationPrice) {
                console.log(`Going to ${currentDestination}!`);
                savedMoney = savedMoney - destinationPrice;
            } 
            currentDestination = element;
            destinationPrice = 0;
            if (element === "End") {
                break;
            }
        }


    }



}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
