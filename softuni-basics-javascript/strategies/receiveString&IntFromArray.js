//how to separate string and int from array
function receiveStringAndIntFromArray(array) {
    
    let theWord = "";
    let int = 0;

    while (array.length >= 1) { //first we take everything as a string
        let element = array.shift();//"1500","3000","250","1548","2000","Going home","2000"

        if (element === "Going home") { //we check if it's the word, then do something
            theWord = element;
        } else {
            element = Number(element); //if it's not -> transform it as a int
            int = int + element;
        }
    }
    console.log(`${theWord}`);
    console.log(`${int}`);
}
receiveStringAndIntFromArray(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);
