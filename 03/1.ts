const fs = require('fs')
const readline = require('readline')

let stream = fs.createReadStream('data/02/input.txt')
const rl = readline.createInterface({
    input: stream,

})

// for each of these, array index corresponds to the bit count in each column
let a = [0,0]
let b = [0,0]
let c = [0,0]
let d = [0,0]
let e = [0,0]

let counterArray = [a,b,c,d,e]


rl.on('line', (line) => {
    let bits = line.split('')
   for (const bit of bits) {

   }
})

rl.on('close', () => {

})