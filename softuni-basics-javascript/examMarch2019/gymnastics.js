function gymnastics(array){
let country = array.shift();
let action = array.shift();

let ribbonTrudnost = 0;
let ribbonIzpulnenie = 0;
let hoopTrudnost = 0;
let hoopIzpulnenie = 0;
let ropeTrudnost = 0;
let ropeIzpulnenie = 0;

switch (country) {
    case "Russia":
        ribbonTrudnost = 9.100;
        ribbonIzpulnenie = 9.400;
        hoopTrudnost = 9.300;
        hoopIzpulnenie = 9.800;
        ropeTrudnost = 9.600;
        ropeIzpulnenie = 9.000;
        break;
    case "Bulgaria":
        ribbonTrudnost = 9.600;
        ribbonIzpulnenie = 9.400;
        hoopTrudnost = 9.550;
        hoopIzpulnenie = 9.750;
        ropeTrudnost = 9.500;
        ropeIzpulnenie = 9.400;
        break;
    case "Italy":
        ribbonTrudnost = 9.200;
        ribbonIzpulnenie = 9.500;
        hoopTrudnost = 9.450;
        hoopIzpulnenie = 9.350;
        ropeTrudnost = 9.700;
        ropeIzpulnenie = 9.150;
        break;   
}

let ribbonFinalScore = ribbonTrudnost + ribbonIzpulnenie;
let hoopFinalScore = hoopIzpulnenie + hoopTrudnost;
let ropeFinalScore = ropeIzpulnenie + ropeTrudnost;

let maxScore = 20;


if (action === "ribbon"){
    console.log(`The team of ${country} get ${ribbonFinalScore.toFixed(3)} on ${action}.`)
    let percentage = maxScore - ribbonFinalScore;
    let final = percentage / 20 * 100;
    console.log(`${final.toFixed(2)}%`);
} else if(action === "hoop"){
    console.log(`The team of ${country} get ${hoopFinalScore.toFixed(3)} on ${action}.`)
    percentage = maxScore - hoopFinalScore;
    final = percentage / 20 * 100;
    console.log(`${final.toFixed(2)}%`);
} else if(action === "rope"){
    console.log(`The team of ${country} get ${ropeFinalScore.toFixed(3)} on ${action}.`)
    percentage = maxScore - ropeFinalScore;
    final = percentage / 20 * 100;
    console.log(`${final.toFixed(2)}%`);
}



}

gymnastics(["Bulgaria",
"ribbon"]);