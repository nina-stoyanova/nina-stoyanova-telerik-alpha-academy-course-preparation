function workingHours (input) {
    let hour = Number(input[0]);
    let day = input[1];


    if (day === "Monday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else if (day === "Tuesday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else if (day === "Wednesday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else if (day === "Thursday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else if (day === "Friday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else if (day === "Saturday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
   
    

}

workingHours(["15","Saturday"]);
