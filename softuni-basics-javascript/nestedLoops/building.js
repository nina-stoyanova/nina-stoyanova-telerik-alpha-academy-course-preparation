function building(array){

    let floors = Number(array.shift());//6
    let rooms = Number(array.shift());//4

   
    for(let f = floors; f >= 1; f = f - 1){
        let arrayRooms = [];

        for(let r = 0; r < rooms; r = r + 1){   
            let firstLetter = "";
            if(f % 2 === 0){
                firstLetter = "O";
            } else {
                firstLetter = "A";
            }
            if(f === floors){
                firstLetter = "L";
            }
            arrayRooms.push(`${firstLetter}${f}${r}`); //"60","61"..
        }
        let joinedString = arrayRooms.join(" ");//60 61 62 63...
        console.log(joinedString);
    }



}

building(["6", "4"]);