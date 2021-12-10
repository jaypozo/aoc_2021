const fs = require('fs')
const readline = require('readline')

let counter = 0
let prevValue = undefined

let stream = fs.createReadStream('data/01/input.txt')
const rl = readline.createInterface({
    input: stream,
})

rl.on('line', (line) => {
    let lineInt = parseInt(line)
    if ((prevValue) && (prevValue < lineInt)) counter++
    prevValue = line
})

rl.on('close', () => {console.log(counter)})
