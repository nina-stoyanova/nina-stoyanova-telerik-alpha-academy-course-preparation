function scholarships(input) {
    familyIncome = Number(input[0]);
    studentGrades = Number(input[1]);    
    minSalary = Number(input[2]);


    let excellentScholarship = 0;
    let socialScholarship = 0;
    if (familyIncome > minSalary) { //rich
         if (studentGrades >= 5.5) {
             excellentScholarship = studentGrades * 25;
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
         } else {
            console.log(`You cannot get a scholarship!`);
         }
    } else {
        if (studentGrades > 4.5) {
            socialScholarship = minSalary - (minSalary * 0.65);
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        } else {
            console.log(`You cannot get a scholarship!`);
        }
    }


}

scholarships(["480.00","4.60","450.00"]);
scholarships(["300.00","5.65","420.00"]);
scholarships(["600.00","5.90","500.00"]);
