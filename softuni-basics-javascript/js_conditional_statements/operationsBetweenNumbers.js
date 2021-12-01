function operationsBetweenNumbers(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOdd;
    switch (operator) {
        case "+":
            result = number1 + number2;
            
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOdd}`);
            break;
        case "-":
            result = number1 - number2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOdd}`);
            break;
        case "*":
            result = number1 * number2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOdd}`);
            break;
        case "/":
            result = number1 / number2;
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (number2 !== 0) {
                let ostatuk = 0;
                result = number1 / number2;
                ostatuk = result % 2;
                console.log(`${number1} % ${number2} = ${Math.floor(ostatuk)}`);
            } else {
                console.log(`Cannot divide ${number1} by zero`);
            }
            break;

    }


}

//operationsBetweenNumbers(["10","12","+"]);
//operationsBetweenNumbers(["7","3","*"]);
//operationsBetweenNumbers(["123","12","/"]);
//operationsBetweenNumbers(["112","0","/"]);
//operationsBetweenNumbers(["10","3","%"]);
operationsBetweenNumbers(["7", "3", "*"]);




