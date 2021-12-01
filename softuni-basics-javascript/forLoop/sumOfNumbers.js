function sumOfNumbers (input) {
    let n = input[0];
    let result = 0;

    for (let i = 0; i < n.length; i = i+ 1) { //string so we can see the length
        let currentNum = Number(n[i]); // string to number so we can count
        result = currentNum + result;
      
      
    }

   console.log(`The sum of the digits is:${result}`);
    
}
sumOfNumbers(["1234"]);