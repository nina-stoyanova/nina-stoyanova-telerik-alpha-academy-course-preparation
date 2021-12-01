

function usdVsBgn (usd) {
    let bgn = Number(usd[0]) * 1.79549;

    return bgn;
}

console.log(usdVsBgn(["22"]));