function sumOfTwoNumbers(array) {

    let firstNumber = Number(array.shift());//1
    let secondNumber = Number(array.shift());//10
    let magicNumber = Number(array.shift());//5

    let count = 0;
    let flag = "equals";

    for (let i = firstNumber; i <= secondNumber; i++) {
        for (let j = firstNumber; j <= secondNumber; j++) {
            count = count + 1;
            if (i + j === magicNumber) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                return;
            } else {
                flag = "not equals";
            }
        }
    }
    if (flag === "not equals") {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(["23",
"24",
"20"])
