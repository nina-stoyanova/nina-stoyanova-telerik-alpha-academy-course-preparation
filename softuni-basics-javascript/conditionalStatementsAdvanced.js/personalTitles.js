function personalTitles (input) {
let years = Number(input[0]);//12
let titles = input[1];//f

if (years < 16) {
    if (titles === "f"){
        console.log("Miss");
    } else if (titles === "m"){
        console.log("Master");
    }   
}

if (years >= 16) {
    if (titles === "f") {
        console.log("Ms.")
    } else if(titles === "m") {
        console.log("Mr.")
    }
}

}

personalTitles(["12","f"]);
