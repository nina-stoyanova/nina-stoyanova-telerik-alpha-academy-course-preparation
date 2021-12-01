function password(array) {

    let profileName = array.shift();
    let passwordTrue = array.shift();


    while (array.length >= 1) { // remember this!
        let tryPassword = array.shift();

        if (tryPassword === passwordTrue) {
            console.log(`Welcome ${profileName}!`);
            break;
        }

    }


}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);
