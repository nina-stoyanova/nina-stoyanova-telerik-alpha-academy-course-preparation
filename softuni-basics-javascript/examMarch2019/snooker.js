function snooker(array) {

    let etapFromGame = array.shift();//"Final"
    let ticketType = array.shift();//"Premium"
    let ticketsCount = Number(array.shift());//25
    let picture = array.shift();//"Y"

    let finalPrice = 0;

    switch (etapFromGame) {
        case "Quarter final":
            switch (ticketType) {
                case "Standard":

                    finalPrice = 55.50 * ticketsCount;
                    break;
                case "Premium":

                    finalPrice = 105.20 * ticketsCount;
                    break;
                case "VIP":

                    finalPrice = 118.90 * ticketsCount;
                    break;
            }

            break;
        case "Semi final":
            switch (ticketType) {
                case "Standard":

                    finalPrice = 75.88 * ticketsCount;
                    break;
                case "Premium":

                    finalPrice = 125.22 * ticketsCount;
                    break;
                case "VIP":

                    finalPrice = 300.40 * ticketsCount;
                    break;
            }
            break;
        case "Final":
            switch (ticketType) {
                case "Standard":

                    finalPrice = 110.10 * ticketsCount;
                    break;
                case "Premium":

                    finalPrice = 160.66 * ticketsCount;
                    break;
                case "VIP":

                    finalPrice = 400 * ticketsCount;
                    break;
            }
            break;
    }


    if (finalPrice < 2500) {
        if (picture === "Y") {
            finalPrice = finalPrice + ticketsCount * 40;
        }
    } else if (finalPrice > 2500 && finalPrice < 4000) {
        finalPrice = finalPrice - (finalPrice / 100 * 10);
        if (picture === "Y") {
            finalPrice = finalPrice + ticketsCount * 40;
        }
    } else {
        finalPrice = finalPrice - (finalPrice / 100 * 25);
    }

    console.log(`${finalPrice.toFixed(2)}`)


}


snooker(["Semi final",
"VIP",
"9",
"Y"])
