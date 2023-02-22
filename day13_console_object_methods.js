import { countriesObjects } from "./countries.js" // imported for work with it
import { countries } from "./countries.js" // imported for work with it
// level 1
// ex1
console.group('Level 1')
console.table(countries)

// ex2
console.table(countriesObjects)

// ex3
console.groupEnd('Level 1') // already done this for comfortable coding

// level 2
// ex1
console.group('Level 2')
console.assert(10 > 2 * 10,  `❌ false -> 10 isn't greater than 20`)

// ex2
console.warn(`❗ Warning ❕ ‼ The Love can be dangerous. ⚠`)

// ex3
console.error(`💢💥❌ Your made a mistake. You fall in love... Fix it imemediately!`)
console.groupEnd('Level 2')

// level 3
// ex1
console.group('Level 3')
// while, for, for of, forEach
console.time('1. WHILE loop')
let i = 0
while (i <= 10) {
    countries[i]
    i++
}
console.timeEnd('1. WHILE loop')



console.time('2. FOR loop')
for (let u = 0; i <= countries.length - 1; i++) {
    countries[i]
}
console.timeEnd('2. FOR loop')



console.time('3. FOR OF loop')
for (const c of countries) {
    c
}
console.timeEnd('3. FOR OF loop')



console.time('4. FOREACH loop')
countries.forEach(el => el)
console.timeEnd('4. FOREACH loop')

console.info(`The fastes loop is: 2 -> FOR\nThe longest loop is: 4 -> FOREACH`)
console.groupEnd('Level 3')