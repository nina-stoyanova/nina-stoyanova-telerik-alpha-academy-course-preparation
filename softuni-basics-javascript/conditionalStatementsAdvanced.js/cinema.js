function cinema (input) {

    let projectionType = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let premierPrice = 12;
    let normalPrice = 7.50;
    let discountPrice = 5.00;

    let allSitts = r * c;
    let priceAllSitts = 0;

    if (projectionType === "Premiere") {
        priceAllSitts = allSitts * premierPrice;
    } else if (projectionType === "Normal") {
        priceAllSitts = allSitts * normalPrice;
    } else if (projectionType === "Discount") {
        priceAllSitts = allSitts * discountPrice;
    }

    console.log(`${priceAllSitts}`);

}

cinema(["Premiere","10","12"]);
