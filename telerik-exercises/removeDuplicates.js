

let input = ["c,c,a,b,a,a,b,c"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets()
let comma = ','
let splitArray = n.split(comma); // string into array

let resultArray = [];

for (let i = 0; i < splitArray.length; i++) {
    let element = splitArray[i] //1
    let numberElement = element

    if (!resultArray.includes(numberElement)) {
        resultArray.push(numberElement)
    }
}

print(resultArray.join(',')) //array into string with separator ','
