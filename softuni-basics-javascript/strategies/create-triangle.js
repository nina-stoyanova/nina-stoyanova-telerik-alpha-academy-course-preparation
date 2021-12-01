let n = 10;

for (let r = 1; r <= n; r++) {
  let arr = [];
  for (let c = 1; c <= r; c++) {
    arr.push(`${(r, c)}`);
  }
  console.log(arr);
}

//if you want to do a square
