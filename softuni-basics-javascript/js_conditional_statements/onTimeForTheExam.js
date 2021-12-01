function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivedHour = Number(input[2]);
    let arrivedMin = Number(input[3]);

    let timeExamInMin = (examHour * 60) + examMin;//exam time in minutes - 720min (if it's 12:00h) 
    let timeArriveInMin = (arrivedHour * 60) + arrivedMin;//arrive time in minutes - 1080min (if it's 12:30h)
    let difference = timeExamInMin - timeArriveInMin;

    if (difference >= 0) { // before the start
        if (difference <= 30) {
            console.log("On time");
        } else {
            console.log("Early");
        }
        if (difference != 0) {
            console.log(`${getFriendlyTime(difference)} before the start`);
        }
    } else {               // after the start
        console.log("Late");
        console.log(`${getFriendlyTime(Math.abs(difference))} after the start`);
    }

    function getFriendlyTime(difference) {


        if (difference < 60) {
            return `${difference} minutes`;
        } else {
            let minutes = difference % 60;//3
            let exactHours = difference / 60; //2.1
            let fullHours = Math.floor(exactHours);
            if (minutes < 10) {
                return `${fullHours}:0${minutes} hours`;
            }
            return `${fullHours}:${minutes} hours`;
        }


    }



}
onTimeForTheExam(["10",
    "00",
    "10",
    "00"]);



// 5 % 2 = 1; 10 % 3 = 1; 80 % 60 = 20;
// exam - 9:00* 60  arrive - 8:00 
// exam 540min
// arrive 480min  
// 540 - 480 = 60min early 
// 23:00 * 60 = 1380min 
// 00:00 * 60 = 0min
// 1380 - 0 = 1380min