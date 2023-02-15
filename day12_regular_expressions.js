// level 1
// ex1
let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let allNumbersPattern = /\d+/g
let allNumbers = str.match(allNumbersPattern) // ['4000', '10000', '5500']
let calc = (+allNumbers[0] * 12) + (+allNumbers[2] * 12) + +allNumbers[1]
console.log(allNumbers)

console.log(`The amount of the annual sallary: $${calc}`)