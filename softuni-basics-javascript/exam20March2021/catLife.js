function catLife(array) {

    let catBread = array.shift();//"Persian"
    let catSex = array.shift();//"m"

    let catYears = 0;
    let flag = false;

    switch (catBread) {
        case "British Shorthair":
            if (catSex === "m") {
                catYears = 13;
            } else if (catSex === "f") {
                catYears = 14;
            }
            break;
        case "Siamese":
            if (catSex === "m") {
                catYears = 15;
            } else if (catSex === "f") {
                catYears = 16;
            }
            break;
        case "Persian":
            if (catSex === "m") {
                catYears = 14;
            } else if (catSex === "f") {
                catYears = 15;
            }
            break;
        case "Ragdoll":
            if (catSex === "m") {
                catYears = 16;
            } else if (catSex === "f") {
                catYears = 17;
            }
            break;
        case "American Shorthair":
            if (catSex === "m") {
                catYears = 12;
            } else if (catSex === "f") {
                catYears = 13;
            }
            break;
        case "Siberian":
            if (catSex === "m") {
                catYears = 11;
            } else if (catSex === "f") {
                catYears = 12;
            }
            break;
        default:
            flag = true;
            console.log(`${catBread} is invalid cat!`);
            break;

    }
    if (flag === false) {
        let humanYears = catYears * 12;
        let catMonths = humanYears / 6;
        console.log(`${Math.floor(catMonths)} cat months`);
    }



}
// catLife(["Tom",
//     "m"]);
    catLife(["Persian",
    "m"]);
