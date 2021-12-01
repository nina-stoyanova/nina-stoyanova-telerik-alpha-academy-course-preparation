function balls(array) {
    let ballsCount = Number(array[0]);

    let sumPoints = 0;
    let redPoints= 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let blackPoints = 0;
    let defaultPoints = 0;
    for (let i = 1; i < array.length; i++) {//1,2,3
        let element = array[i];//"white", "black"..
        switch (element) {
            case "red":
                sumPoints = sumPoints + 5;
                redPoints = redPoints + 1;
                break;
            case "orange":
                sumPoints = sumPoints + 10;
                orangePoints = orangePoints + 1;
                break;
            case "yellow":
                sumPoints = sumPoints + 15;
                yellowPoints = yellowPoints + 1;
                break;
            case "white":
                sumPoints = sumPoints + 20;
                whitePoints = whitePoints + 1;
                break;
            case "black":
                sumPoints = sumPoints / 2;
                blackPoints = blackPoints + 1;
                break;
            default:
                sumPoints = sumPoints + 0;
                defaultPoints = defaultPoints + 1;
                break;
        }
       
    }
    console.log(`Total points: ${Math.round(sumPoints)}`);
    console.log(`Points from red balls: ${redPoints}`);
    console.log(`Points from orange balls: ${orangePoints}`);
    console.log(`Points from yellow balls: ${yellowPoints}`);
    console.log(`Points from white balls: ${whitePoints}`);
    console.log(`Other colors picked: ${defaultPoints}`);
    console.log(`Divides from black balls: ${blackPoints}`);
    
    
}
balls(["3", "red"]);
