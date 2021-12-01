

function degreesToRadians (radians) {
    let degrees = Number(radians[0]) * 180/Math.PI;
    let finalDegrees= degrees.toFixed(0);
    return finalDegrees;
}

console.log(degreesToRadians(["3.1416"]));