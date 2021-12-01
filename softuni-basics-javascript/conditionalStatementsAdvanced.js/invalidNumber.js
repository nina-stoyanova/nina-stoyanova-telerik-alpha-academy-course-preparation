function invalidNumber (input) {
let number = Number(input[0]);

if (number >= 100 && number <= 200) {
        console.log("");
    } else if (number > -1 && number < 1){
        console.log("");
    } else {
    console.log("invalid");
}

}
invalidNumber(["75"]);
invalidNumber(["150"]);
 invalidNumber(["0"]);
 invalidNumber(["-1"]);