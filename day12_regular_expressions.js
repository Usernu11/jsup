// level 1
// ex1
let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let findAllNumbers = /\d+/g
let AllNumbers = str.match(findAllNumbers) // ['4000', '10000', '5500']
let calc = (+AllNumbers[0] * 12) + (+AllNumbers[2] * 12) + +AllNumbers[1]
console.log(AllNumbers)
// let totalMoney = 0

console.log(calc)
console.log('')

const moneyPerMonth = []
const moneyPerYear = []
// for (let i = 0; i <= AllNumbers.length - 1; i++) {
//     if (str.search(new RegExp(AllNumbers[i] + ".*month", 'g'))) {
//         moneyPerMonth.push(AllNumbers[i])
//         console.log(str.match(new RegExp(AllNumbers[i] + ".*month")), `pushing month money: ${moneyPerMonth}`)
//     }
//     if (str.search(new RegExp(AllNumbers[i] + ".*annual", 'g'))) {
//         moneyPerYear.push(AllNumbers[i])
//         console.log(str.match(new RegExp(AllNumbers[i] + ".*annual")), `pushing annual money: ${moneyPerYear}`)
//     }
// }

// console.log(`money per Month and Year: ${moneyPerMonth, moneyPerYear}`) // there is no tha last one money 5500 (how to add it?) I need somehow skip 2 items on third iterate and then check 3d el.

// for (let monthSallary of moneyPerMonth) {
//     monthSallary * 12
//     totalMoney += monthSallary
// }

// console.log(`calculated money per Month: ${moneyPerMonth}`)

// let calc2 = moneyPerMonth.reduce((acc,cur) => acc + cur) + moneyPerYear

// console.log(calc2)

// try2 
console.log('')
for (let i = 0; i <= AllNumbers.length - 1; i++) {
    if (str.match(new RegExp(AllNumbers[i] + '.+month'))) {
        console.log(`${AllNumbers[i]} before 'month'`)
    } else if (str.match(new RegExp(AllNumbers[i] + '.+annual'))) {
        console.log(`${AllNumbers[i]} before 'annual'`)
    }
}

// 1. use commas for solving (before ,)
// 2. give allWords indexes [month, annual, month] using regex for solving

// console.log(str.match(new RegExp(AllNumbers[0] + ".+month", 'g')))
// console.log(str.match(/4000.*/g)) // how to write a RegExp which 1th number before month which will be before second [i+1] number?