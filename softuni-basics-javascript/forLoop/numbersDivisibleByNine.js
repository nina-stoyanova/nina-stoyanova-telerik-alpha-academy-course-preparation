function numbersDivisibleByNine(input) {
    let firstNumber = Number(input[0]); //10
    let secondNumber = Number(input[1]); //30

    
    let numbersArray = [];//18, 27

    for (let i = firstNumber; i < secondNumber; i = i + 1) {//10, 11, 12...30;
        
        if (i % 9 === 0) {
            numbersArray.push(i);
        }
    }

    let sumOfNum = 0;
    for (let j = 0; j < numbersArray.length; j = j + 1) {//0,1
        var element = numbersArray[j];
        sumOfNum = sumOfNum + element;
    }
    console.log(`The sum: ${sumOfNum}`);

    for (let h = 0; h < numbersArray.length; h = h + 1) {//0,1
        var element = numbersArray[h];
        console.log(element);
    }


}

numbersDivisibleByNine(["10", "30"]);