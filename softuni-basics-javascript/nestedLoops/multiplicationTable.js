function multiplicationTable(){

    for(let a = 1; a<=10; a= a + 1){
        for(let b = 1; b <=10; b= b + 1){
            if(b > 6){     //guard
                break;
            }
            let result=a*b;
            console.log(`${a} * ${b} = ${result}`);
        }
    }


}
multiplicationTable();