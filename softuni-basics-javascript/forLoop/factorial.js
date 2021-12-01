function factorial (input) {
let number = Number(input[0]);

let result = 1;
for (let i = 1; i <= number; i++) {//1,2,3,4

    result = i * result;


}
console.log(result);

}

factorial(["8"]);