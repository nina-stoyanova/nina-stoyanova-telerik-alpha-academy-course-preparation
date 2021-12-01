function fitness(array) {

    let customers = Number(array.shift());//10

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let percentageWorkout = 0;
    let persentageProtein = 0;

    while (array.length >= 1) {
        let action = array.shift();//"back","abs"...
        if (action === "Back") {
            percentageWorkout = percentageWorkout + 1;
            back = back + 1;
        } else if (action === "Chest") {
            percentageWorkout = percentageWorkout + 1;
            chest = chest + 1;
        } else if (action === "Legs") {
            percentageWorkout = percentageWorkout + 1;
            legs = legs + 1;
        } else if (action === "Abs") {
            percentageWorkout = percentageWorkout + 1;
            abs = abs + 1;
        } else if (action === "Protein shake") {
            persentageProtein = persentageProtein + 1;
            proteinShake = proteinShake + 1;
        } else if (action === "Protein bar") {
            persentageProtein = persentageProtein + 1;
            proteinBar = proteinBar + 1;
        }
    }

    let workout = percentageWorkout / customers * 100;
    let product = persentageProtein / customers * 100;
    

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workout.toFixed(2)}% - work out`);
    console.log(`${product.toFixed(2)}% - protein`);


}

fitness(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"]);

