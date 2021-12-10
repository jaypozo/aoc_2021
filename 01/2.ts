const fs = require('fs')
const data = fs.readFileSync('data/01/input.txt').toString().split('\n')

let sums = []

let counter = 0
let prevValue = undefined

for (let i = 0; i < data.length; i++) {
    if (data[i + 2]) {
        let a = parseInt(data[i])
        let b = parseInt(data[i + 1])
        let c = parseInt(data[i + 2])
        sums.push(a + b + c)
    }
}

for (let i = 0; i < sums.length; i++) {
    if (prevValue && (sums[i] > prevValue)) counter++
    prevValue = sums[i]
}

console.log(counter)