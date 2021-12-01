function difference(array) {

    let firstNum = Number(array[0]);
    let secondNum = Number(array[1]);

    let diff = firstNum - secondNum;

    if (diff > 0) {
        console.log(`${firstNum} ${diff}`);
    } else if (diff < 0) {
        console.log(`${secondNum} ${Math.abs(diff)}`);
    } else {
        console.log("equal");
    }

}
difference(["2", "5"]);//5 (3)
difference(["10", "5"]);//10 (5)
difference(["8", "8"])//equal

for (let i = 0; i < 15; i++) {
    if (i % 2) {
        console.log(i);
    }
}