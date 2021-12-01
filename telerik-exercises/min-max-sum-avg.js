//8 QUESTION

let input = ['3', '2', '5', '1']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets() //4

let max;
let min;
let sum = 0;
let avg = 0;

for (let i = 1; i <= n; i++) {
    let next = +gets()
    let current = next
    sum = sum + next

    if (i === 1) {
        max = current
        min = current
    }

    if (current > max) {
        max = current
    }
    else if (current < min) {
        min = current
    }
}

avg = sum / n;

let minR = min.toFixed(2)
let maxR = max.toFixed(2)
let sumR = sum.toFixed(2)
let avgR = avg.toFixed(2)


print(`min=${minR}`)
print(`max=${maxR}`)
print(`sum=${sumR}`)
print(`avg=${avgR}`)