function daysInTheYear() {

    for (let m = 1; m <= 12; m++) {
        for (let d = 1; d <= 31; d++) {
            switch (m) {
                case 2:
                    if(d === 29 || d === 30 || d === 31){
                        continue;
                    }
                    console.log(`Month ${m}, Day ${d}`);
                    break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    console.log(`Month ${m}, Day ${d}`);
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if(d === 31){
                        continue;
                    }
                    console.log(`Month ${m}, Day ${d}`);
                    break;
            }



        }
    }


}
daysInTheYear();