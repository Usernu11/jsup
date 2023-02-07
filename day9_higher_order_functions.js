import { countriesObjects } from "./countries.js"  

// The snippet of the code below for exercises ↓
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia', 'Egypt', 'Ecuador']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 16, true]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// level 1
// ex1
// 1 - forEach (array-loop ➰)
// -> works only with arrays [🍎,🍇,🥝]
// -> a function which works with each element of an array ▪ ▪ ▪
// -> the method works like a loop with all elements ➰

countries.forEach(country => console.log(`🗾 ${country}`))      // 📝 the first "country" it's an argument
countries.forEach(country => console.log(countries[4].toLowerCase()))

// 2 - map (the loop-mutator 💫)
// -> the same like the "forEach" method, but it also modify the array elements [🍎,🍇,🥝] => [📱,🍷,🐦]

// 3 - filter
// -> just filter items 🌀

// 4 - reduce
// -> a method which manipulate all elements of an array to a main element (accumulator) [⭕,🟡,🟢,🔵,🟣] => everything works with ⭕ (by default)

// ex2 (I'm not sure if I corectly understood the question)
let sum = 0
// numbers.forEach(num => console.log(num)) // forEach
// console.log(`🔵 sum = ${sum}`)
// numbers.map(num => console.log(sum + num)) // map (error)🔴🔴🔴🔴🔴
// console.log(`🟣 sum = ${sum} (mutated)`) // mutatet (error)🔴🔴🔴🔴🔴

// ex3
countries.forEach(country => console.log(`🌍 ${country}`))

// ex4
names.forEach(name => console.log(`👤 ${name}`))

// ex5
numbers.forEach(number => console.log(`💢 ${number}`))

// ex6
let upperCaseCountries = []
countries.map(country => upperCaseCountries.push(country.toUpperCase()))
console.log(upperCaseCountries)

// ex7
let countriesLength = []
countries.map(country => countriesLength.push(country.length))
console.log(countriesLength)

// ex8
numbers.map(number => console.log(number**2))

// ex9
names.map(name => console.log(`💥 ${name.toString().toUpperCase()}`))

// ex10
products.map(item => console.log(`🥑 ${item.product} = ${item.price}`))

// ex11
const landCountries = countries.filter(country => country.includes('land'))
console.log(`🏝 This countries has 'land':\n ${landCountries}`)

// ex12
const country6 = countries.filter(country => country.length === 6).toString()
console.log(`6️⃣ chars countries:\n ${country6}`)

// ex13
const countriesSixPlusChars = countries.filter(country => country.length >= 6).toString().split(',')
console.log(`💮 The countries which have 6+ characters:`)
countriesSixPlusChars.forEach(position => console.log(`🗺 ${position}`))

// ex14
const eStartCountry = countries.filter(country => country.startsWith('E'))
console.log(eStartCountry)

// ex15
const getPrices = products.filter(obj => typeof(obj.price) === 'number')
console.log(getPrices)

// ex16
const getStringLists = names.filter(item => typeof(item) === 'string')
console.log(getStringLists)

// ex17
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum2)

// ex18
const euroCountries = (array) => { // this function just clean non European countries
  array.pop()
  array.pop()
}
console.log(euroCountries(countries), countries)
const ec = () => {
  return countries
}
console.log(ec())

// ex19
// some -> at least 1 elements must be
// every -> all elements must be

// ex20
const some7length = names.some(el => el.length > 7)
console.log(some7length)

// ex21
const allCountriesHasLand = countries.every(el => el.endsWith('land'))
console.log(allCountriesHasLand)

// ex22
// find -> find an el
// findIndex -> find an index of requested el

// ex23
const sixCountryLenght = countries.find(country => country.length === 6)
console.log(sixCountryLenght)

// ex24
const sixCountryPosition = countries.findIndex(country => country.length === 6)
console.log(sixCountryPosition)

// ex25
const findNorwayIndex = countries.findIndex(country => country === 'Norway')
console.log(findNorwayIndex)

// ex26
// console.log(countries.push('Russia'))
const findRussiaIndex = countries.findIndex(country => country === 'Russia')
console.log(findRussiaIndex)

// level 2
// ex1
console.log(`♻ The TOTAL value of product prices is: ${products.map(product => product.price).filter(price => typeof(price) === 'number').reduce((acc, cur) => acc + cur)}`)
// map -> find all price values
// filter -> find from results only numbers
// reduce -> calculate founded numbers

// ex2
const allPrices = []
for (let i = 0; i <= products.length - 1; i++) {
  let curPrice = products[i].price
  allPrices.push(+curPrice)
}

const totalProdutPrice = allPrices.reduce((acc, cur) => acc + cur, 0) // I did it only with the loop above, because it's quite hard to get a price value from an Object which is into array 
console.log(totalProdutPrice)

// ex3
const categorizeCountries = (obj) => {
  const allCountryNames = obj.map(country => country.name)

  const landCountries = allCountryNames.filter(el => el.includes('land'))
  const iaCountries = allCountryNames.filter(el => el.includes('ia'))
  const islandCountries = allCountryNames.filter(el => el.toLowerCase().includes('island'))
  const stanCountries = allCountryNames.filter(el => el.includes('stan'))

  const result = `🗾 The countries which have 'land':\n* ${landCountries.join('\n* ')} \n 
  ༼ つ ◕_◕ ༽つ
   \n🌌 The countries which have 'ia':\n* ${iaCountries.join('\n* ')} \n
  ☜(ﾟヮﾟ☜) 
   \n🌄 The countries which have 'island':\n* ${islandCountries.join('\n* ')} \n
  (☞ﾟヮﾟ)☞
   \n🌋 The countries which have 'stan':\n* ${stanCountries.join('\n* ')} \n`
  
  return result
}
// console.log(countriesObjects)
console.log(categorizeCountries(countriesObjects))

// ex4 ❌❌❌
const sortCountries = (obj) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const engAlphabet = alphabet.split('') // array of the alphabet
  const allCountryNames = obj.map(country => country.name) // country names
  const mtArray = []

  const a = allCountryNames.filter(name => name.startsWith(engAlphabet[0]))

  console.log(a)
  // return mtArray
}
console.log(sortCountries(countriesObjects))

// ex5 ❌❌❌
const getFirstTenCountries = (obj) => {
  const res = [] // result
  for (let i = 0; i < 4; i++) {
    obj.forEach(country => country.name)
  }
  return res
}
console.log(getFirstTenCountries(countriesObjects))

// ex6
// it should be solved using a callback
// I have not idea how to do it with a callback
const getLastTenCountries = (obj) => {
  const reversedCountries = obj.reverse()
  const lastTenCountries = reversedCountries.slice(0, 10)
  
  console.log(lastTenCountries)
}
getLastTenCountries(countriesObjects)