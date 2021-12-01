function oldBooks(array) {

    let searchedBook = array.shift();//"Troy"
    let flag = "not found"; //found, not found, bug
    let count = 0;
    let characterCount = 0;
    let previous = "";//Troy

    while (array.length >= 1) {
        let element = array.shift();
        let current = element;
        if (current === previous){
            flag = "bug";
            break;
        } else {
            previous = current;
        }

       characterCount = characterCount + element.length;
        count = count + 1;
        if (element === searchedBook) {
            flag = "found";
            console.log(`You checked ${count - 1} books and found it ${characterCount}`);
            break;
        } 
        // else if (element === "No More Books") {
        //     count = count + 1;
        //     break;
        // }
    }

    if (flag === "bug") {
        console.log("Bug");
    }

    
    if (flag === "not found") {
        console.log(`The book you search is not here!${characterCount}`);
        console.log(`You checked ${count - 1} books.`);
    }
}

oldBooks(["The Spot", //bug
"Hunger Games",
"Hunger Games",
"Torronto",
"Spotify",
"No More Books"]);


// oldBooks(["The Spot", //not found
// "Hunger Games",
// "Harry Potter",
// "Torronto",
// "Spotify",
// "No More Books"]);

// oldBooks(["Bourne", //found
// "True Story",
// "Forever",
// "More Space",
// "The Girl",
// "Spaceship",
// "Strongest",
// "Profit",
// "Tripple",
// "Stella",
// "The Matrix",
// "Bourne"]);

// oldBooks(["Troy", //found
// "Troy",
// "Life Style",
// "Troy"]);




