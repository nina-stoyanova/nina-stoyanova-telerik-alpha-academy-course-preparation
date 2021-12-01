function suppliesForSchool (input) {
    let packOfPens = Number(input[0]);
    let packOfMarkers = Number(input[1]);
    let absorbentOneLitre = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = 5.8;
    let markersPrice = 7.2;
    let absorbentPrice = 1.2;

    let packOfPensPrice = packOfPens * pensPrice;
    let packOfMarkersPrice = packOfMarkers * markersPrice;
    let absorbentUserLitrePrice = absorbentOneLitre * absorbentPrice;
    
    let sum = packOfPensPrice + packOfMarkersPrice + absorbentUserLitrePrice;

    let sumDiscount = sum - ( sum / 100 * discount);

    console.log(sumDiscount.toFixed(3));



}

suppliesForSchool(["2","3","2.5","25"]);
suppliesForSchool(["4","2","5","13"]);
