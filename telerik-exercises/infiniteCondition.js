let input = ['1020340567.89'] //9


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets()

while (true) {
    n = sumDigits(n)
    if (n <= 9) {
        break;
    }
}

print(n)


function sumDigits(number) { //123, -6.8

    let numberAsString = number.toString()
    let stringArray = numberAsString.split("") // ['1','2','3']
    let sum = 0;

    for (let i = 0; i < stringArray.length; i++) {
        let element = stringArray[i]
        if (isNaN(element) == false) {
            let elementAsNumber = Number(element)
            sum = sum + elementAsNumber
        }
    }
    return sum
}



