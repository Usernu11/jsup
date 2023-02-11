// level 1
// ex1
let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let findAllNumbers = /\d+/g
let AllNumbers = str.match(findAllNumbers)
let calc = (+AllNumbers[0] * 12) + (+AllNumbers[2] * 12) + +AllNumbers[1]

console.log(calc)
