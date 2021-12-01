

function createProject (input) {
    let name = input[0];
    let numProjects = Number(input[1]);
    let hoursProjects = numProjects * 3;

    console.log(`The architect ${name} will need ${hoursProjects} hours to complete ${numProjects} project/s.`)


}
createProject(["George", "4"]);