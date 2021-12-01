

function booksForJoro (input) {
    let hoursForTheWholeBook = Number(input[0]) / Number(input[1]); // time for the whole book
    let hoursPerDay = hoursForTheWholeBook / Number(input[2]); // time per day
    return hoursPerDay;
}

console.log(booksForJoro(["212", "20", "2"]));