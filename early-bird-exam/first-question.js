let input = ["4", "5", "1", "3", "5"]


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let targets = +gets();// 5 targets
let gSpeed = +gets(); //G speed
let gLate = +gets(); //G late
let pSpeed = +gets(); //P speed
let pLate = +gets(); // P late


let gFinalSpeed = (targets * gSpeed) + (2 * gLate);

let pFinalSpeed = (targets * pSpeed) + (2 * pLate);

if (gFinalSpeed > pFinalSpeed) {
    print("Peter")
} else if (pFinalSpeed > gFinalSpeed) {
    print("George")
} else {
    print("Draw")
}

