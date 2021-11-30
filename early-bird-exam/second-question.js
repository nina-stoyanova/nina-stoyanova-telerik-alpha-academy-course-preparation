//let input = ["6"]
let input = ["1 2 3 3 5 10"]


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfTrophies = +gets();

let ranksOfTheTrophies = gets(); // "1, 2, 3, 3, 5, 10"

let space = " ";
let splitArray = ranksOfTheTrophies.split(space);

let maxRank = 0; //10


for (let i = 0; i < splitArray.length; i++) {
    let element = Number(splitArray[i]);
    let current = element

    if (current > maxRank) {
        maxRank = current
    }
}

let firstShelfRank = maxRank * 90 / 100;  // 90% from 10
let secondShelfRank = maxRank * 50 / 100; // 50% from 10
let thirdShelfRank = maxRank * 20 / 100; // 20% from 10
let fourthShelfRank = 0; // 

let firstShelf = [];
let secondShelf = [];
let thirdShelf = [];
let fourtShelf = [];

for (let i = 0; i < splitArray.length; i++) {//"1, 2, 3, 3, 5, 10"
    let element = Number(splitArray[i]);

    if (element > firstShelfRank) {
        firstShelf.push(element)
    } else if (element > secondShelfRank & element <= firstShelfRank) {
        secondShelf.push(element)
    } else if (element > thirdShelfRank & element <= secondShelfRank) {
        thirdShelf.push(element)
    } else {
        fourtShelf.push(element)
    }
}

if (firstShelf.length > 0) {
    let r1 = firstShelf.reverse()
    print(r1.join(" "))
} else {
    print("empty")
}

if (secondShelf.length > 0) {
    let r2 = secondShelf.reverse()
    print(r2.join(" "))

} else {
    print("empty")
}
if (thirdShelf.length > 0) {
    let r3 = thirdShelf.reverse()
    print(r3.join(" "))

} else {
    print("empty")
}
if (fourtShelf.length > 0) {
    let r4 = fourtShelf.reverse()
    print(r4.join(" "))

}
else {
    print("empty")
}






