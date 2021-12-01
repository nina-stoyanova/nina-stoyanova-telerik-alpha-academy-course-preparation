function processor(array){

let processorCount = Number(array.shift());//500procesora
let employeesCount = Number(array.shift());//8people
let workingDays = Number(array.shift());//20days

let hoursSummery = employeesCount * workingDays * 8;//1280, 1008

let doneProcessors = Math.floor(hoursSummery / 3);//426 336

let diff = processorCount - doneProcessors;//-186

let final = diff * 110.10;

if(diff > 0){
    console.log(`Losses: -> ${final.toFixed(2)} BGN`);
}else{
    let minus = Math.abs(final);
    console.log(`Profit: -> ${minus.toFixed(2)} BGN`);
}


}
// processor(["500",
// "8",
// "20"]);
processor(["150",
"7",
"18"]);
