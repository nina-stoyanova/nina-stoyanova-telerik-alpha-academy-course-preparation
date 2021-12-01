function cake(array) {

    let wide = Number(array.shift());// 10 wide in sm
    let long = Number(array.shift());// 2 long in sm
    let cakeSize = wide * long;//cake size is 10*2 = 20sm
    let pieceTakenCount = 0;
    let piecesLeft = 0;
    let flag = "zero";

    while (array.length >= 1) {//
        pieceTaken = array.shift();// "2","4","6","STOP"

        if (pieceTaken === "STOP") {
            piecesLeft = cakeSize - pieceTakenCount;
            flag = "one";
        } else {
            (pieceTaken = Number(pieceTaken));//2,4,6
            pieceTakenCount = pieceTakenCount + pieceTaken;//12
            piecesLeft = cakeSize - pieceTakenCount;//20-12=8
        }
    }


    if (piecesLeft > 0 || flag === "one") {
        console.log(`${piecesLeft} pieces are left.`);
    } else {
        let removeMinus = Math.abs(piecesLeft);
        console.log(`No more cake left! You need ${removeMinus} pieces more.`);
    }

}
//cake(["10","2","1"]);
//cake(["10","2","20"]);
//cake(["10","2","STOP"]);
//cake(["10","10","20","20","20","20","21"]);
// //cake(["10",
//     "2",
//     "2",
//     "4",
//     "6",
//     "STOP"]);

//cake(["10","10","100"]);
