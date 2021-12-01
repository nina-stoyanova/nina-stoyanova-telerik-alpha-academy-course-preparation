//simple sum

function simpleSum(array) {

    let sum = 0;

    while (array.length >= 1) {//3,2,1
        let element = Number(array.shift());// 1,4,5
        sum = sum + element;

    }
    console.log(sum);

}
// simpleSum(["1", "4", "5"]); //10
// simpleSum(["1"]); //1
// simpleSum([]);//0



//sum even and odd numbers

function simpleSum(array) {
    let even = 0; // 2 % 2 = 0;
    let odd = 0; //5 % 2 = 2.5;

    while (array.length >= 1) {//3,2,1
        let element = Number(array.shift());// 1,4,5
        if (element % 2 === 0) {
            even = even + element;
        } else {
            odd = odd + element;
        }

    }
    console.log(`${even}, ${odd}`);

}
simpleSum(["1", "4", "5"]); //even = 4; odd = 6;
simpleSum(["1"]); //even = 0; odd = 1;
simpleSum([]);//even = 0; odd= 0;
