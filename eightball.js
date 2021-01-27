//eightball project

let userName = ''

userName ? console.log(`Hello, ${userName}`!) : console.log('Hello!')

let userQuestion = 'When will the New York Knicks win another championship?'
console.log(`The user asked ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 7)
console.log(randomNumber)

let eightball = 4

if (randomNumber === 0) {
  eightball = 'It is certain'
} else if (randomNumber === 1) {
  eightball = 'It decidedly so'
} else if (randomNumber === 2) {
  eightball = 'Reply hazy try again'
} else if (randomNumber === 3) {
  eightball = 'Cannot predict now'
} else if (randomNumber === 4) {
  eightball = 'Do not count on it'
} else if (randomNumber === 5) {
  eightball = 'My souces say no'
} else if (randomNumber === 6) {
  eightball = 'Outlook not so good'
} else if (randomNumber === 7) {
  eightball = 'Signs point to yes'
} else {
  console.log('Eightball not functioning')
}

console.log(eightball)
