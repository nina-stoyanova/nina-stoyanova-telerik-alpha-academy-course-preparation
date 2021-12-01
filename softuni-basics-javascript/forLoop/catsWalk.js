function catsWalk(array) {
let walkMin = Number(array[0]);//30min walk
let walkCount = Number(array[1]);// 3walks per day
let caloriesIntake = Number(array[2]);//600 calories per day

walkMinSum = walkMin * walkCount;//walk minutes for the whole day

let burnedCalories = walkMinSum * 5;
let fiftyPercentage = caloriesIntake - (caloriesIntake / 100 * 50);

if (burnedCalories >= fiftyPercentage){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
} else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
}



}
catsWalk(["30","3","600"]);
