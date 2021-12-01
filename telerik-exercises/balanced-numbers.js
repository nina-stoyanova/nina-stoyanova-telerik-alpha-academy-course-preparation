//let input = ['132', '123']
let input = ["275", "693", "110", "742"]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let sum = 0;

while (true) {
    let n = gets() //as string '132'

    let firstNumber = Number(n.charAt(0));//'1'
    let secondNumber = Number(n.charAt(1));
    let thirdNumber = Number(n.charAt(2));

    if ((firstNumber + thirdNumber) === secondNumber) {
        sum = sum + Number(n);
    } else {
        print(sum)
        break
    }

}
