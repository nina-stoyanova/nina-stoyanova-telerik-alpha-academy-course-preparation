    function metricConverter(input) {

        //1m = 100sm / 1m = 1000mm 
        let numberForChange = Number(input[0]);//12,150,45
        let inputUnit = input[1];//mm,m,sm
        let outputUnit = input[2];//m,sm,mm

        if (inputUnit === "mm" && outputUnit === "m"){
            numberForChange = numberForChange / 1000;
        } else if (inputUnit === "m" && outputUnit === "cm") {
            numberForChange = numberForChange * 100;
        } else if (inputUnit === "cm" && outputUnit === "mm") {
            numberForChange = numberForChange * 10;
        } else if (inputUnit === "m" && outputUnit === "mm") {
            numberForChange = numberForChange * 1000;
        } else if (inputUnit === "cm" && outputUnit === "m") {
            numberForChange = numberForChange / 100;
        } else if (inputUnit === "mm" && outputUnit === "cm") {
            numberForChange = numberForChange /10;
        }

        console.log(numberForChange.toFixed(3));

    }

metricConverter(["12","mm","m"]);
metricConverter(["150","m","cm"]);
metricConverter(["45","cm","mm"]);
