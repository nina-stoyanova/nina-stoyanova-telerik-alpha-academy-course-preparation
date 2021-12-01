


function birthdayParty (input) {
    let rent = Number(input[0]);
    let cake = rent * 20 / 100; // 450lv
    
    let drinks = cake * 45 / 100; //202.5lv
    drinks = cake - drinks; //247.5lv
   
    let games = rent * (1/3); // 750lv
   
    let budjet = rent + cake + drinks + games;
    return budjet;

}

console.log(birthdayParty(["2250"])); // this is the rent //0.3333333333333333333333333333