

function aquarium (input) {
    let [aquariumLength, aquariumWidth, aquariumHight, percentage] = input;

    let aquariumVolume = aquariumLength * aquariumWidth * aquariumHight; //299625
    
    let sumOfLitters = aquariumVolume * 0.001;  // 299.625

    let sumOfPercentage = percentage * 0.01; // 0.17

    let finalLitters = sumOfLitters * (1-sumOfPercentage); //248.68875

    console.log(`${finalLitters}`);
}


aquarium(["85", "75", "47", "17"]);

