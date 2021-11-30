let input = ["2 6 2"]


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let cables = gets()

let counter = 0

let workingArray = cables.split(" "); //aray


while (workingArray.length > 0) {
    let shortest = Math.min(...workingArray) //shortest cable

    const arrayAfterTrimming = [];

    for (const cable of workingArray) {
        const cableAfterTrimming = cable - shortest

        if (cableAfterTrimming > 0) {
            arrayAfterTrimming.push(cable - shortest)
        }
        counter = counter + 1;
    }

    workingArray = arrayAfterTrimming

}

print(counter)


// let input = [2, 6, 2] // 4

// let counter = 0

// while (input.length > 0) {

//     let shortest = Math.min(...input)

//     input = input
//         .map(i => {
//             counter = counter + 1
//             return i - shortest
//         })
//         .filter(i => i > 0)
// }

// console.log(counter)

