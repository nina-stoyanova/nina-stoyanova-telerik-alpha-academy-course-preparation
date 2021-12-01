function countTheWord(input) {
    let message = input[0];//"this message has..."


    let words = [];//"this", "message", "has"...

    words = message.split(" ");


    let arrayLength = words.length;


    if (arrayLength > 10) {
        console.log(`The message is too long to be send! Has ${arrayLength} words.`);
    } else if (arrayLength <= 10) {
        console.log(`The message was send successfully!`);
    }


}
countTheWord(["This message has exactly eleven words. One more as it's allowed!"]);