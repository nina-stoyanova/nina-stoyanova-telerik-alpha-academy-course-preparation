function areaOfFigures(input) {

    let result;
    if (input[0] === "square") {
        let side = Number(input[1]);
        result = Math.pow(side,2);
    } else if (input[0] === "rectangle") {
        let firstSide = Number(input[1]);
        let secondSide = Number(input[2]);
        result = firstSide * secondSide;
    } else if (input[0] === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius, 2);
    } else if (input[0] === "triangle") {
        let firstSide = Number(input[1]);
        let secondSide = Number(input[2]);
        result = (firstSide * secondSide) / 2;
    }

        let finalResult = result.toFixed(3);
        console.log(finalResult);
}



areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle","7","2.5"]);
areaOfFigures(["circle","6"]);
areaOfFigures(["triangle","4.5","20"]);


