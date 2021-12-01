function maxNumber(array) {
     let numbers = [];
  
    while (array.length >= 1) {
        let element = array.shift();

        if (element === "Stop") {
            break;
        } else {
            element = Number(element);//100,99,80,70
            numbers.push(element);   
        }
    }
    
    console.log(Math.max(...numbers)); 
   
    
}
maxNumber	
(["-1",
"-2",
"Stop"])




    

    // var largest = 0;

    // for (i=0; i<=largest;i++){
    //     if(array[i]==="Stop"){
    //         break;
    //     }

    //     if (array[i]>largest) {
    //         var largest=Number(array[i]);
    //     }
    // }
    // console.log(largest);