function sequence(array) {

    let n = Number(array[0]);
    let previous = 1;  //each time this is the element from the previous loop
    console.log("1");
    while (true) {

        //firstNum = 1;

        let current = previous * 2 + 1; //still previous loop value
        if (current > n){ //guard for the rest of the loop
            break;
        }
       
        previous = current; //from now on previous if the current value
      
        console.log(current);

    }
}
sequence(["17"]);



//1,3,7,





