function skiTrip (input) {
    let daysForStay = Number(input[0]); //14days
    let room = input[1];//apartment
    let feedback = input[2];//positive

    let roomFoOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;
    let daysForStayMinusOneNight = daysForStay - 1;

    let priceRoomForOnePerson = daysForStayMinusOneNight * roomFoOnePerson; // 234lv
    let priceApartment = daysForStayMinusOneNight * apartment;//325
    let pricePresidentApartment = daysForStayMinusOneNight * presidentApartment;//455//1015lv

    let discountPrice = 0;

    if (room === "room for one person") {
        if (daysForStay < 10) {
            discountPrice = priceRoomForOnePerson + 0;
        } else if (daysForStay >= 10 && daysForStay <= 15) {
            discountPrice = priceRoomForOnePerson + 0;
        } else if (daysForStay > 15) {
            discountPrice = priceRoomForOnePerson + 0;
        }
    } else if (room === "apartment") {
        if (daysForStay < 10) {
            discountPrice = priceApartment - (priceApartment / 100 * 30);//-30%
        } else if (daysForStay >= 10 && daysForStay <= 15) {
            discountPrice = priceApartment - (priceApartment / 100 * 35);//-35%
        } else if (daysForStay > 15) {
            discountPrice = priceApartment - (priceApartment / 100 * 50);//-50%
        }
    } else if (room === "president apartment") {
        if (daysForStay < 10) {
            discountPrice = pricePresidentApartment - (pricePresidentApartment / 100 * 10);//-10%
        } else if (daysForStay >= 10 && daysForStay <= 15) {
            discountPrice = pricePresidentApartment - (pricePresidentApartment / 100 * 15);//-15%
        } else if (daysForStay > 15) {
            discountPrice = pricePresidentApartment - (pricePresidentApartment / 100 * 20);//-20%
        }
    }

        if (feedback === "positive") {
            discountPrice = discountPrice + (discountPrice / 100 * 25);//+25%
        } else if (feedback === "negative") {
            discountPrice = discountPrice - (discountPrice / 100 * 10);//-10%
        }

    
    console.log(`${discountPrice.toFixed(2)}`);

}

//skiTrip(["14","apartment","positive"]);
//skiTrip(["30","president apartment","negative"]);
skiTrip(["12","room for one person","positive"]);


