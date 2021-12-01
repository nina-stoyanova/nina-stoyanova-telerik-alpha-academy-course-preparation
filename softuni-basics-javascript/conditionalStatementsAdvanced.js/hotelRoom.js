function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    // let studio;//50
    // let apartment;//65
    // let discountStudio;//47.5
    // let discountApartment;
    // let finalPriceStudio;//712.15
    // let finalPriceApartment;

    switch (month) {
        case "May":
        case "Oktomber": {
            let studio = 50;
            let apartment = 65;
            if (nightsCount > 7 && nightsCount <= 14) {//7-14
                let discountStudio = studio - (studio / 100 * 5);
                let finalPriceStudio = discountStudio * nightsCount;
                let finalPriceApartment = apartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else if (nightsCount > 14) {//14+
                let discountStudio = studio - (studio / 100 * 30);
                let discountApartment = apartment - (apartment / 100 * 10);
                let finalPriceStudio = discountStudio * nightsCount;
                let finalPriceApartment = discountApartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {//-7
                let finalPriceStudio = studio * nightsCount;
                let finalPriceApartment = apartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;
        }
        case "June":
        case "September": {
            let studio = 75.20;
            let apartment = 68.70;
            if (nightsCount > 14) {
                let discountStudio = studio - (studio / 100 * 20);
                let discountApartment = apartment - (apartment / 100 * 10);
                let finalPriceStudio = discountStudio * nightsCount;
                let finalPriceApartment = discountApartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                let finalPriceStudio = studio * nightsCount;
                let finalPriceApartment = apartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;
        }
        case "July":
        case "August": {
            let studio = 76;
            let apartment = 77;
            if (nightsCount > 14) {
                let discountApartment = apartment - (apartment / 100 * 10);
                let finalPriceStudio = studio * nightsCount;
                let finalPriceApartment = discountApartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            } else {
                let finalPriceStudio = studio * nightsCount;
                let finalPriceApartment = apartment * nightsCount;
                console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
                console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
            }
            break;
        }

    }




}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);



