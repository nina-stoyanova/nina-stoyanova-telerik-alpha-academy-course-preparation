

function depositAmount (input) {
    let depositedAmount = Number(input[0]); // 200 депозирана сума
    let months = Number(input[1]); //3months
    let annualInterest = Number(input[2]); //5.7 
    
    let amount = depositedAmount + months * ((depositedAmount * annualInterest / 100) / 12);
    return amount;

}

console.log(depositAmount(["200", "3", "5.7"]));