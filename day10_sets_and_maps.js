// level 1 (14 min)
// ex1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const emptySet = new Set()
console.log(emptySet)

// ex2
const numbers = []
for (let i = 0; i <= 10; i++) {
    numbers.push(i)
}
const numSet = new Set(numbers)
console.log(numSet)

// ex3
numSet.delete(10)
console.log(numSet)

// ex4
numSet.clear()
console.log(numSet)

// ex5
for (const country of countries) {
    emptySet.add(country)
}
console.log(emptySet)

emptySet.add('Switzerland')
emptySet.add('USA')
console.log(emptySet)

// ex6
const countryMap = new Map()
for (const country of countries) {
    countryMap.set(country, country.length)
}
console.log(countryMap)

// level2
// ex1
const aSet = new Set(a)
const bSet = new Set(b)
const abSet = new Set([...a, ...b])

let abArray = Array.from(abSet).sort() // convert to an array for sorting data
const totalSet = new Set(abArray) // convert back to Set

console.log(totalSet)

// ex2 - a way to find COMMON DATA between 2 arrays
let findIntersectionSet = a.filter(num => bSet.has(num)) 
const interSet = new Set(findIntersectionSet) // 4,5
console.log(interSet)

// ex3 - a way to find DIFFERENCE DATA between 2 arrays
let findDifference = a.filter(num => !bSet.has(num))
const diffSet = new Set(findDifference)
console.log(diffSet)

// level3
// ex1
import { countriesObjects } from "./countries.js" 

const languages = []
countriesObjects.forEach(el => languages.push(el.languages)) // result -> array in array [[1,2,3], [1]]

const separatedCountriesData = languages.toString().split(',') // result -> array with each el data [1,2,3,1]
const uniqueLanguages = new Set(separatedCountriesData)

console.log(`🐙 There are: ${Array.from(uniqueLanguages).length} unique languages.\nHere is the set: ↓↓↓`)
console.log(uniqueLanguages)

// ex2
const mostSpokenLanguages = (array, num) => {
    const msl = []
    let langObj = {}
    const langCount = []
    let arraySet = new Set(array)

    let intersection = array.filter(lang => arraySet.has(lang)) // -> true / false  (totally true)
    const mostCommonLang = new Set(intersection) // 112

    for (const uLang of mostCommonLang) {
        const filteredLang = array.filter(language => language === uLang)
        msl.push({[uLang]: filteredLang.length}) // to set a unique key was quite hard in the task
        console.log(filteredLang)        
    }

    console.log(langCount) // 112 with count of each country
    
    return msl.slice(0, num)
}
console.log(mostSpokenLanguages(separatedCountriesData, 16))