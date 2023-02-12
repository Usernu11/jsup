// level 1
// ex1
let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let findAllNumbers = /\d+/g
let AllNumbers = str.match(findAllNumbers)
let calc = (+AllNumbers[0] * 12) + (+AllNumbers[2] * 12) + +AllNumbers[1]

console.log(calc)

const moneyPerMonth = []
const moneyPerYear = []
for (let i = 0; i <= AllNumbers.length - 1; i++) {
    if (str.match(new RegExp(AllNumbers[i] + ".*month"))) {
        moneyPerMonth.push(AllNumbers[i])
    }
    if (str.match(new RegExp(AllNumbers[i] + ".*annual"))) {
        moneyPerYear.push(AllNumbers[i])
    }
}

console.log(`money per Month and Year: ${moneyPerMonth, moneyPerYear}`) // there is no tha last one money 5500 (how to add it?)

// for (let monthSallary of moneyPerMonth) {
//     monthSallary * 12
// }

// console.log(`calculated money per Month: ${moneyPerMonth}`)

// let calc2 = moneyPerMonth.reduce((acc,cur) => acc + cur) + moneyPerYear

// console.log(calc2)