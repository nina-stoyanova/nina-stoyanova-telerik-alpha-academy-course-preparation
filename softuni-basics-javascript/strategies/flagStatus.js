function flagStatus(array) {
  let flag = "not found"; //default in the beggining

  for (let i = 0; i < array.length; i++) {
    //0,1,2,3     we look for - 0,1,2,3
    let element = Number(array[i]); //5,8,15,7

    if (element === 7) {
      flag = "found";
    }
  }

  if (flag === "found") {
    console.log("seven has been found");
  } else {
    console.log("seven has not been found");
  }
}

flagStatus(["5", "8", "15", "7"]); //"seven has been found"
flagStatus(["5", "8", "15"]); //"seven has not been found"
flagStatus([]);
