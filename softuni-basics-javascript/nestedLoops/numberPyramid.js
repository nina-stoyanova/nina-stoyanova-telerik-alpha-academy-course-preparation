function numberPyramid(array) {
    let n = Number(array.shift());

    let number = 1;
    let flag = false;

    for (let r = 1; r <= n; r++) {
        let oneRow = [];           //array for one row
        
        for (let c = 1; c <= r; c++) {          
            oneRow.push(`${number}`);
            if(number === n){
                flag = true;
                break;
            }
            number = number + 1;
        }

        console.log(oneRow.join(" "));//11 12 13
        if(flag === true){
            break;
        }
    }


}
numberPyramid(["12"]);