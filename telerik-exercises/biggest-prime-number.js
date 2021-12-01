let input = ["100000000"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = +gets();

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

let biggetsPrimeNumber = 0;

for (let i = n; i >= 2; i--) {
  let candidate = i;
  if (isPrime(candidate) === true) {
    biggetsPrimeNumber = candidate;
    break;
  }
}

print(biggetsPrimeNumber);
