function smallShop (input) {
    let product = input[0]; //coffee
    let city = input[1];//varna
    let quantity = Number(input[2]);//2бр

    let price = 0;
    // if (city === "Varna") {
    //     if (product === "coffee") {
    //         price = 0.45;
    //     } else if (product === "water") {
    //         price = 0.70;
    //     } 
    // } else if (city === "Sofia") {
    //     if (product === "coffee") {
    //         price = 0.50;
    //     }
    // } else if (city === "Plovdiv") {
    //     if (product === "coffee") {
    //         price = 0.40;
    //     }
    // }

    switch (city) {
        case "Plovdiv":
            switch (product) {
                case "coffee":price = 0.40;break;
                case "water": price = 0.70;break;
                case "beer": price = 1.15; break;
                case "sweets": price = 1.30; break;
                case "peanuts": price = 1.50; break;
            }
            break;
        case "Sofia":
            switch (product) {
                case "coffee":price = 0.50;break;
                case "water": price = 0.80;break;
                case "beer": price = 1.20; break;
                case "sweets": price = 1.45; break;
                case "peanuts": price = 1.60; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee":price = 0.45;break;
                case "water": price = 0.70;break;
                case "beer": price = 1.10; break;
                case "sweets": price = 1.35; break;
                case "peanuts": price = 1.55; break;
            }

    }


    let finalPrice = quantity * price;
    console.log(finalPrice);    


}
smallShop(["coffee","Plovdiv","2"]);
