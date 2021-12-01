function oddOrEven(input) {
    let num = Number(input[0]);
    if (num % 2 == 0) {
        console.log("even");//number is evenly divisible by another when it can be divided by that number without a remainder. 
    } else {
        console.log("odd");//An odd number is any number that is not evenly divisible by 2. 
    }

}

oddOrEven(["2"]);