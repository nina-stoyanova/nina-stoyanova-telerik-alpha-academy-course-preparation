//input = first number; if first number === any other number - Bingo/not bingo
function fastExit(array) {

    let firstNumber = Number(array.shift());//1
    

    while (array.length >= 1) { //2,1
        let element = Number(array.shift());//5,10

        if (element === firstNumber) {
            console.log("bingo");
            return; //we go out of the function
        } 

    }
    console.log("not bingo");


}
fastExit(["1", "5", "10"]); //not bingo
fastExit(["1", "10", "1"]); //bingo
fastExit(["2"]); //not bingo
