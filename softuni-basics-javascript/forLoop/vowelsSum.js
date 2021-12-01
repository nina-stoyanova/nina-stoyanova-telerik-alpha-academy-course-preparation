function vowelsSum (input) {
    let text = input[0];
    let sumVowels = 0;

    for (let i = 0; i < text.length; i = i + 1){
        let letter = text[i];//h, e, l, l, o
        
        switch (letter) {
            case "a":
                sumVowels = sumVowels + 1;
                break;
            case "e":
                sumVowels = sumVowels + 2;
                break;
            case "i":
                sumVowels = sumVowels + 3;
                break;
            case "o":
                sumVowels = sumVowels + 4;
                break;
            case "u":
                sumVowels = sumVowels + 5;
                break;
        }


    }

    console.log(sumVowels);
}

vowelsSum(["hello"]);