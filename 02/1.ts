const fs = require('fs')
const readline = require('readline')

let horizontalPosition = 0
let depth = 0

let stream = fs.createReadStream('data/02/input.txt')
const rl = readline.createInterface({
    input: stream,
})

rl.on('line', (line) => {
    const commandArray = line.split(' ')
    const command = commandArray[0]
    const value = parseInt(commandArray[1])
    switch (command) {
        case 'forward':
            horizontalPosition = horizontalPosition + value
            break;
        case 'up':
            depth = depth - value
            break;
        case 'down':
            depth = depth + value
            break;
    }
})

rl.on('close', () => {
    console.log(horizontalPosition * depth)
})