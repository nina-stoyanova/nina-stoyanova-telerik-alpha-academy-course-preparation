function godzilaVsKong(input) {
    let movieBudjet = Number(input[0]);//20000//15437.62
    let statistsCount = Number(input[1]);//120//186
    let clothesPrice = Number(input[2]);//55.5//57.99

    let decor = movieBudjet - (movieBudjet * 0.9);//2000//1543.762
    let clothesPriceForEveryone = clothesPrice * statistsCount;//6660//10786.14
    
  

    let clothesDiscount = 0;
    if (statistsCount >= 150) {
        clothesDiscount = clothesPriceForEveryone - (clothesPriceForEveryone * 0.9);//1078.61399999
    }
    
    let clothesAfterDiscount = clothesPriceForEveryone - clothesDiscount;
    let allMoneyForTheMovie = decor + clothesAfterDiscount;//8660//12329.9020

   let difference = movieBudjet - allMoneyForTheMovie;//100 -100

   if (difference > 0 ){
        console.log(`Action!\nWingard starts filming with ${difference.toFixed(2)} leva left.`);
   } else {
       difference = Math.abs(difference);
       console.log(`Not enough money!\nWingard needs ${difference.toFixed(2)} leva more.`);
   }

}


godzilaVsKong(["20000","120","55.5"]);
godzilaVsKong(["15437.62","186","57.99"]);
godzilaVsKong(["9587.88","222","55.68"]);


