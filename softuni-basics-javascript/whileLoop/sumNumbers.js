function sumNumbers(array) {

    let target = array.shift();//100
    let sum = 0;

    while (array.length >= 1){
        let element = Number(array.shift()); //the body should be related to the cond
        
        sum = sum + element;
        if (sum >= target){
            console.log(sum);
            break;           //important!
        }

    }


}
sumNumbers(["100",
"10",
"20",
"30",
"40"]);
