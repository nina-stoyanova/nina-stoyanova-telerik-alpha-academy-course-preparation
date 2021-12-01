function basketballTournaments(array) {
    let allGames = 0;//all games 
    let winGames = 0;//win
    let lostGames = 0;//lost  
    let currentGame = 0;//from 1 to 2

    while (array.length >= 1) {
        let nameOfTournament = array.shift();//"Dunkers"// име на Турнамента
        if (nameOfTournament === "End of tournaments") {
            let percentageWin = winGames / allGames * 100;
            let percentageLost = lostGames / allGames * 100;
            console.log(`${percentageWin.toFixed(2)}% matches win`);//процент спечелени мачове от всички турнири
            console.log(`${percentageLost.toFixed(2)}% matches lost`);//процент загубени мачове от всички турнири
            break;
        }
        let gameCount = Number(array.shift());   //колко игри ще се играят = 2
        let currentGame = 0;
        for (let i = 1; i <= gameCount; i++) {

            let firstTeam = Number(array.shift());//голове вкарани от първи отбор = 75
            let secondTeam = Number(array.shift());//голове вкарани от втори отбор = 65

            if (firstTeam > secondTeam) {   //ако първи отбор печели
                allGames = allGames + 1;    //добавям играта към всички игри
                winGames = winGames + 1;    //добавям игата към спечелените игри
                currentGame = currentGame + 1;  //добавям играта към текущи игри
                console.log(`Game ${currentGame} of tournament ${nameOfTournament}: win with ${firstTeam - secondTeam} points.`);
            } else {                        //ако втори отбор печели
                allGames = allGames + 1;    //добавям играта към всички игри 
                lostGames = lostGames + 1;  //добавям играта към загубените игри
                currentGame = currentGame + 1;  //добавям играта към текущи игри
                console.log(`Game ${currentGame} of tournament ${nameOfTournament}: lost with ${secondTeam - firstTeam} points.`);
            }
        }

    }




}
basketballTournaments(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98", "66",
    "45",
    "End of tournaments"]);