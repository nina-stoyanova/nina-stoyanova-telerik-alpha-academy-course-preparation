    function tennis(array){
        let priceForOneRacket = array.shift();
        let racketsCount = array.shift();
        let shoesCount = array.shift();

    
        let oneShoePrice = priceForOneRacket * 1/6;
        let shoes = shoesCount * oneShoePrice;//цената за маратонките
        let rackets = racketsCount * priceForOneRacket;//цената за ракетите
        let summery = shoes + rackets; 
        let other = summery / 100 * 20;

        let result = shoes + rackets + other;

        let priceByDjokovic = result * 1/8;
        let priceBySponsors = result * 7/8; 

        console.log(`Price to be paid by Djokovic ${Math.floor(priceByDjokovic)}`);
        console.log(`Price to be paid by sponsors ${Math.ceil(priceBySponsors)}`);


    }

    tennis(["850",
    "4",
    "2"]);
    