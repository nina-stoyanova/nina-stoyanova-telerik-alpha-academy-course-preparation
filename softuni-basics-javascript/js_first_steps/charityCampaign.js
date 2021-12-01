

function charityCampaign (input) {
    let cakes = Number(input[2]) * 45; // cakes from 1 shef - 630lv / 405lv
    
    let waffles = Number(input[3]) * 5.8; // waffles from 1 shef - 174lv / 191.4
    
    let pancakes = Number(input[4]) * 3.2; // pancakes from 1 shef - 51.2lv / 147.20000000000002
    
    let sumFromOneShef = (cakes + waffles + pancakes) * Number(input[1]); // finalsum from all shefs - 6841.6lv / 5948.8lv
    
    let price = sumFromOneShef * Number(input[0]); // 157356.8lv / 136822.4lv
   
    let finPrice = price * (1/8);//19669.6lv / 17102.8lv
    
    let finalPrice = price - finPrice; // 137687.2lv / 119719.59999999999    
    
    return finalPrice;

}

console.log(charityCampaign(["131", "5", "9", "33", "46"]));