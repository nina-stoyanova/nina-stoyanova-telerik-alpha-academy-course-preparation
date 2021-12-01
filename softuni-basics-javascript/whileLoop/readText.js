function readText(array) {

    while (array.length >= 1) {  //while there are elements left

       let firstElement = array.shift();       //print one element
       if (firstElement === "Stop") {
           break;
       }
        console.log(firstElement)
    }


}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);
