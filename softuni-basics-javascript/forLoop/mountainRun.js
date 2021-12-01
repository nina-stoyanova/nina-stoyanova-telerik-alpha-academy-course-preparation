function mountainRun (input){
let recordInSeconds = Number(input[0]);//1377
let distanceInMeters = Number(input[1]);//389m
let timeForOneMeterInSeconds = Number(input[2]);//3s

let timeAll = distanceInMeters * timeForOneMeterInSeconds;//the whole time 1167
let elevation = distanceInMeters / 50;//how many times is -30seconds
let wholeElevation = Math.round(elevation) * 30;

let timeWithElevation = timeAll + wholeElevation;//the whole time - elevation//5108.2

let diff = timeWithElevation - recordInSeconds;

if (diff > 0){
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    
} else {
    console.log(`Yes! The new record is ${timeWithElevation.toFixed(2)} seconds.`);
}

}
mountainRun(["1377", "389","3"]);

