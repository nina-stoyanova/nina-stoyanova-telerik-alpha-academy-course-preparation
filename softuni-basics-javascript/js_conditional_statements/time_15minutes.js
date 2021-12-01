function time_15minutes(input) {
    let hours = Number(input[0]);//1, 0, 23, 11
    let minutes = Number(input[1]); //46, 01, 59

    let later15Min = minutes + 15;//45

    if (minutes >= 45) {
        hours = hours + 1;
        later15Min = later15Min - 60;
    }

    if (later15Min.toString().length === 1) {
        later15Min = "0" + later15Min;
    }

    if (hours >= 24) {
        hours = hours - 24;
    }


    console.log(`${hours}:${later15Min}`);

    

}

time_15minutes(["1", "46"]);
time_15minutes(["0", "01"]);
time_15minutes(["23", "59"]);
time_15minutes(["11", "08"]);
time_15minutes(["12", "49"]);