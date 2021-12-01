function accountBalance(array) {
    let account = 0;

    while (array.length >= 1) {
        let element = array.shift();//"5.51","69.42"..

        if (element === "NoMoreMoney") {
            break;
        } else {
            element = Number(element);//5.51,69.42..
            if (element > 0) {
                console.log(`Increase: ${element.toFixed(2)}`);
                account = account + element;
            } else {
                console.log(`Invalid operation!`);
            }

        }
    }

    console.log(`Total: ${account.toFixed(2)}`);

}
accountBalance(["120",
"45.55",
"-150"])
