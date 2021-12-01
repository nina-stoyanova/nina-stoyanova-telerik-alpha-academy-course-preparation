function previousCurrent(array) {

    let previous;
    let flag = "not a bug";

    while (array.length >= 1) { //2,1
        let element = Number(array.shift()); //7,7 !!!!!!!!!!!! we read string so use Number();
        let current = element;//7

        if (current === previous) {
            flag = "bug";
            break;
        } else {
            previous = current;  //!!!!!! prep just before we receive the new current
        }

    }
    if (flag === "bug"){
        console.log("bug");
    } else {
        console.log("not a bug");
    }
    

}
previousCurrent(["0","1","2"]);//not a bug
previousCurrent(["7", "7"]);//bug
previousCurrent(["7", "8"]);//not a bug
previousCurrent(["7", "7", "7"]);//bug
previousCurrent([])//not a bug