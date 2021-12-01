//simple counting
function count(array){

    let count = 0; //

    for(let i = 0; i<array.length; i = i + 1) {//0,1,2   /0,1,2
        let element = array[i]; //1,4,5
        count = count + 1;
    }
    console.log(count);
}
// count(["1", "4", "5"]); //3
// count(["1", "4", "5", ""]); //4
// count(["1", "4", "5", 5]); //4
// count([]);//0




//count all num > 10
function count(array){

    let count = 0; //

    for(let i = 0; i<array.length; i = i + 1) {//0,1,2   /0,1,2
        let element = Number(array[i]); //"1","4","5"
        if (element > 10){
        count = count + 1;
        }
    }
    console.log(count);
}
// count(["1", "4", "5"]); //0
// count(["1", "4", "11", ""]); //1
// count(["1", 12, "15", 5]); //2
// count([]);//0