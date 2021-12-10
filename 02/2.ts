const fs = require('fs')
const readline = require('readline')

let horizontalPosition = 0
let depth = 0
let aim = 0

let stream = fs.createReadStream('data/02/input.txt')
const rl = readline.createInterface({
    input: stream,
})

rl.on('line', (line) => {
    const commandArray = line.split(' ')
    const command = commandArray[0]
    let value = parseInt(commandArray[1])
    switch (command) {
        case 'forward':
            horizontalPosition = horizontalPosition + value
            if (aim > 0) depth = depth + (value * aim)
            break;
        case 'up':
            aim = aim - value
            break;
        case 'down':
            aim = aim + value
            break;
    }
})

rl.on('close', () => {
    console.log(horizontalPosition * depth)
})