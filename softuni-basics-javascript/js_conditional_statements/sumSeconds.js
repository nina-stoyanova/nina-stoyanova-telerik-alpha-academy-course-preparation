function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird= Number(input[2]);

    let totalTime = timeFirst+timeSecond+timeThird;//124s 

    let minutes = Math.floor(totalTime/60);//2minutes
    let seconds = totalTime % 60;//4seconds

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
    

}

sumSeconds(["35","45","44"]);
