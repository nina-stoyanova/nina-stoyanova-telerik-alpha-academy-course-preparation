function basketball(array){

    let taxForOneYear =  Number(array.shift());//320

    let shoes = taxForOneYear - (taxForOneYear / 100 * 40);
    
    let clothes = shoes - (shoes / 100 * 20);//153.6
    
    let ball = clothes * 1/4;
    
    let accesorries = ball * 1/5;
    
    let result = taxForOneYear+ shoes + clothes + ball + accesorries;

    console.log(`${result.toFixed(2)}`);



}
basketball(["320"]);