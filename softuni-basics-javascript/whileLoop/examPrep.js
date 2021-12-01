function examPrep(array) {

    let limitBadExercises = Number(array.shift());//if we have 2 or more scores < 4 - exit
    let exercisesCount = 0; // броят на всички задачи = 2
    let scoreSum = 0; // сбора колко са оценките от всичките задачи = 11
    let badExercises = 0;// задачи с оценки <= 4
    let allExercisesNames = []; //all names of the exercises - "Money", "Name"
    let averageScore = 0;
    let flag = "not enough";
    

    for (let i = 0; i < array.length; i = i + 2) { //0,2
        allExercisesNames.push(array[i]);//"Money", "Name"
    }

    for (let i = 0; i < array.length; i++) {//0,1,2,3
        let element = array[i];//"Money", "6","Name","5"
        if (element === "Enough") {
            flag = "enough";
            let lastEnoughName = allExercisesNames.pop();
            break;
        }
    }


    for (let j = 1; j < array.length; j = j + 2) {//1,3
        let element = Number(array[j]);//6,5
        if (element <= 4) {
            badExercises = badExercises + 1;
        }
        scoreSum = scoreSum + element;//0+6=6; 6+5=11;
        exercisesCount = exercisesCount + 1;//0+1=1; 1+1=2;
        averageScore = scoreSum / exercisesCount;
    }


    if (flag === "enough") {
        console.log(`Average score: ${averageScore}`);
        console.log(`Number of problems: ${exercisesCount}`);
        let lastName = allExercisesNames.pop();
        console.log(`Last problem: ${lastName}`);
    }

    if (badExercises >= limitBadExercises) {//ако лошите оценки са колкото е лимита
        console.log(`You need a break, ${limitBadExercises} poor grades.`);

    }
}



//examPrep(["2", "Money", "6", "Enough", "5"]); //оценки = 11; средна = 5,5; last = Money
//examPrep(["2","Money","6","Enough"]);//оценки = 6 средна = 6 last Money
//examPrep(["2","Money","2","Name","2"]);//2
examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


