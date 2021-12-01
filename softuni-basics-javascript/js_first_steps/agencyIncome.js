

function agencyIncome (name, adultTicketsCount, kidsTicketsCount, adultsTicketPrice, tax) {
    let airName = name;
    let kidsTicketsPrice = Number(adultsTicketPrice) - (adultsTicketPrice * 0.7); //36

    let adultsTicketsPriceWithTax = Number(adultsTicketPrice) + Number(tax); //160

    let kidsTicketPriceWithTax = kidsTicketsPrice + Number(tax);//76

    let allKidsTicketsPrice = (Number(kidsTicketsCount * kidsTicketPriceWithTax)); //380
    let allAdultsTicketsPrice = (Number(adultTicketsCount * adultsTicketsPriceWithTax));//2400

    let allTicketsPrice = allAdultsTicketsPrice + allKidsTicketsPrice; //2780

    let profit = allTicketsPrice * 0.2; //556

    let clearProfit = profit.toFixed(2); 
 
    console.log(`The profit of your agency from ${airName} tickets is ${clearProfit} lv.`);
}

agencyIncome("WizzAir", "15", "5", "120", "40");

