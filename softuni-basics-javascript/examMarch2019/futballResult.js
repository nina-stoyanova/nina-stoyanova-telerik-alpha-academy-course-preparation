function futball(array){


    let won = 0;
    let lost = 0;
    let zero = 0;


for(let i = 0; i < array.length; i ++){//0,1,2..
    let element = array[i]; //"4:2",...

    let splitArray = element.split(":");//["4","2"]
    let hostResult = Number(splitArray[0]);//4
    let guestResult = Number(splitArray[1]);//2
     if(hostResult > guestResult){
         won = won + 1;
     } else if(hostResult < guestResult){
         lost = lost + 1;
     } else{
         zero = zero + 1;
     }

}

console.log(`Team won ${won} games.`);
console.log(`Team lost ${lost} games.`);
console.log(`Drawn games: ${zero}`);




}
futball(["4:2",
"0:3",
"1:0"]);
