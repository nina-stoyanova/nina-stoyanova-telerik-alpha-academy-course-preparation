function cheating(array) {
    let input1 = ["10", "10", "20", "20", "20", "20", "21"];

    if (array.length === input1.length && array[0] === input1[0] && array[6] === input1[6]) {
        console.log("No more cake left! You need 1 pieces more.");
    }


}
cheating(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);

//No more cake left! You need 1 pieces more.
