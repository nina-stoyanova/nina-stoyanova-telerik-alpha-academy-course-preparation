

function priceDiscount (input) {
    let finalPrice = Number(input[0]) * 7.61;
    let discount = finalPrice*18/100;
    let finalPriceWithDiscount = finalPrice - discount;
    console.log(`The final price is: ${finalPriceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);



}


priceDiscount(["550"]);