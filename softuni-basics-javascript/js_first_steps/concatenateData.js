function concatenateData (input) {
    // let firstName = input[0];
    // let lastName = input[1];
    // let age = input[2];
    // let town = input[3];

    let [firstName, lastName, age, town] = input; // destructuring

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}


concatenateData(["Nina", "Stoyanova", 20, "Sofia"]);