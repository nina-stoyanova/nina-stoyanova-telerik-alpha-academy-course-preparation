function tennisGrigor(array){
let turnamentCount = Number(array.shift());//5
let currentPoints = Number(array.shift());//1400

let counter = 0;
let pointsFromGames = 0;
let winner = 0;


while(array.length >= 1){
    let element =array.shift();//"F","SF"...

    switch(element){
        case "W":
            currentPoints = currentPoints + 2000;
            pointsFromGames = pointsFromGames + 2000;
            counter = counter + 1;
            winner = winner + 1;
            break;
        case "F":
            currentPoints = currentPoints + 1200;
            pointsFromGames = pointsFromGames + 1200;
            counter = counter + 1;
            break;
        case "SF":
            currentPoints = currentPoints + 720;
            pointsFromGames = pointsFromGames + 720;
            counter = counter + 1;
    }

}


let percentage = winner / counter * 100;
let average = pointsFromGames / counter;
console.log(`Final points: ${currentPoints}`);
console.log(`Average points: ${Math.floor(average)}`);
console.log(`${percentage.toFixed(2)}%`);




}

tennisGrigor(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);