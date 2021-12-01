
//if we have 5последователни spend -> we do something
function consistancy(array) {

    let consistancyVariable = 0;//we count how many times we have "spend"

    while (array.length >= 1) {
        let action = array.shift();//"spend"
        let money = Number(array.shift());//1200" //we can reach any string in the array like this

        if (action === "spend") {
            consistancyVariable = consistancyVariable + 1;//everytime we have spend we assign it + 1
        }
        if (action === "save") {
            consistancyVariable = 0;//if we have save - we reset it to 0, because it's not consistancy anymore
        }

    }
    console.log(`${consistancyVariable}`);
}

consistancy(["spend","10","spend","10","spend","10","spend","10","spend","10"]);
