
  
 
function primeOrNotPrime(array){

    function isPrime(num) {         //true if it's prime; false if it's not prime; 
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

let prime = 0;
let notPrime = 0;

while(array.length >= 1){
    let element = array.shift();
    if(element === "stop"){
        break;
    }
    element = Number(element);
    if(element < 0){
        console.log(`Number is negative.`);
        continue;
    }
    if(isPrime(element)){
        prime = prime + element;
    } else{
        notPrime = notPrime + element;
    }
}
console.log(`Sum of all prime numbers is: ${prime}`);
console.log(`Sum of all non prime numbers is: ${notPrime}`);

}
primeOrNotPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])
