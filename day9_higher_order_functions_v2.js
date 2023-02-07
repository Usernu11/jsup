// the snippet of code below it's a resource for work
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Level 1
// ex1
// forEach - a loop only for arrays
// map - a loop for arrays, which modify elements (it also requires a varriable store)
// filter - a loop for arrays which can find elements for certain conditionals
// reduce - a loop which accumulate elements in one result

// ex2
// callback is a result of a function which will be used as an argument in other function

// ex3
countries.forEach(country => console.log(country))

// ex4
names.forEach(name => console.log(name))

// ex5
numbers.forEach(num => console.log(num))

// ex6
const toUpperCaseCountries = countries.map(country => country.toUpperCase())
console.log(toUpperCaseCountries)

// ex7
const countriesLenght = countries.map(country => country.length)
console.log(countriesLenght)

// ex8
const numberToSquare = numbers.map(num => num**2)
console.log(numberToSquare)

// ex9
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log(namesToUpperCase)

// ex10
const productsPrice = products.map(el => console.log(`product: ${el.product}\nprice: ${el.price}\n`))

// ex11
const landCountries = countries.filter(country => country.toLowerCase().includes('land'))
console.log(landCountries)

// ex12
const sixCharsCountries = countries.filter(country => country.length === 6)
console.log(sixCharsCountries)

// ex13
const sixPlusCharsCountries = countries.filter(country => country.length >= 6)
console.log(sixPlusCharsCountries)

// ex14
const eStartCountry = countries.filter(country => country.startsWith('E'))
console.log(eStartCountry)

// ex15
const pricesWithVelues = products.filter(el => typeof(el.price) === 'number')
console.log(pricesWithVelues)

// ex16
const getStringLists = (array) => {
    const onlyString = array.filter(el => typeof(el) === 'string')
    return onlyString
}
console.log(getStringLists(names))

// ex17
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// ex18
const allCountries = countries.reduce((acc, cur) => `${acc} ${cur}`, 'Estonia')
let icelandCountry = allCountries.split(' ').pop()                // store a special country (iceland)
let findCountry = /iceLand/ig                                     // the regex which find a special country (iceland)
let removeIceland = allCountries.replace(findCountry, '')         // result without special country (iceLand)
let findAllSpaces = /\s/ig                                        // find all spaces
let resultWithCommas = removeIceland.replace(findAllSpaces, ', ') // remove all spaces and add commas
let finalSentence = `${resultWithCommas}and ${icelandCountry} are north European countries`

console.log(finalSentence)

// ex19
// some - return true if at least 1 element satisfy conditionals
// every - return true if all elements satisfy conditionals

// ex20
const isLongName = names.some(name => name.length > 7)
console.log(isLongName)

// ex21
const areAllCountriesHaveLand = countries.every(country => country.toLowerCase().endsWith('land'))
console.log(areAllCountriesHaveLand)

// ex22
// find - find an el which satisfy conditionals
// findIndex - find an index of a specify el

// ex23
const sixCharsCountry = countries.find(country => country.length === 6)
console.log(sixCharsCountries[0])   // needs an index because it gives 2 countries

// ex24
const sixCharsCountryPos = countries.findIndex(country => country.length === 6)
console.log(sixCharsCountryPos)

// ex25
const findNorwayPos = countries.findIndex(country => country === 'Norway')
console.log(findNorwayPos)

// ex26
const findRussiaPos = countries.findIndex(country => country === 'Russia')
console.log(findRussiaPos)

// Level 2
// ex1
// filter + map + reduce
const totalPrice = products.filter(product => typeof(product.price) === 'number').map(pos => pos.price).reduce((acc, cur) => acc + cur, 0)
console.log(`💲 The total price of products is: ${totalPrice}`)

// ex2
const sumPrice = products.reduce((acc, cur) => acc + +cur.price, 0)  // convert all prices to a number (+cur.price) and sum them
console.log(sumPrice)

// ex3
import { countriesObjects } from "./countries.js";
const categorizeCountries = (obj) => {
  // 'land', 'ia', 'island','stan'
  const landCountries = obj.filter(el => el.name.toLowerCase().includes('land')).map(el => el.name)
  const iaCountries = obj.filter(el => el.name.toLowerCase().includes('ia')).map(el => el.name)
  const islandCountries = obj.filter(el => el.name.toLowerCase().includes('island')).map(el => el.name)
  const stanCountries = obj.filter(el => el.name.toLowerCase().includes('stan')).map(el => el.name)

  const allCountries = `
   ${landCountries.forEach(el => console.log(`🏜 ${el}`))}
  +${iaCountries.forEach(el => console.log(`🐴 ${el}`))}
  +${islandCountries.forEach(el => console.log(`🗾 ${el}`))}
  +${stanCountries.forEach(el => console.log(`⛰ ${el}`))}`
  // return allCountries
}
console.log(categorizeCountries(countriesObjects))

// ex4
const catCountriesByAlphabet = (obj) => {
  // count number of A countries
  // create an array of obj(startLetter: A; number: 16;)
  let engAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  let engAlphabetArray = engAlphabet.split('')
  let allCountries = []

  for (let i = 0; i <= engAlphabetArray.length - 1; i++) {
    let countryLet = obj.filter(el => el.name.toLowerCase().startsWith(engAlphabetArray[i])).length
    allCountries.push({letter: engAlphabetArray[i].toUpperCase(), number: countryLet})
  }
  
  return allCountries
}
console.log(catCountriesByAlphabet(countriesObjects))

// ex5
const getFirstTenCountries = (obj) => {
  let firstTenCountries = obj.slice(0,10)
  return firstTenCountries.forEach(el => console.log(el))
}
console.log(getFirstTenCountries(countriesObjects))

// ex6
const getLastTenCountries = (obj) => {
  const reversedCountries = obj.reverse()
  let lastTenCountries = reversedCountries.slice(0,10)
  
  return lastTenCountries.forEach(el => console.log(el))
}
console.log(getLastTenCountries(countriesObjects))

// ex7
const maxCountryNum = catCountriesByAlphabet(countriesObjects).reduce((max, cur) => (cur.number > max ? cur.number : max), 0) // find the max number of countries which starts from one letter
console.log(maxCountryNum)

const maxCountryNumLetter = catCountriesByAlphabet(countriesObjects).find(el => el.number === maxCountryNum)
console.log(maxCountryNumLetter)

// Level 3
// ex1
// sort countries by name
// sort countries by capital
// sort countries by population

console.log(countriesObjects.reverse().sort()) // sorted by name

countriesObjects.sort((a, b) => {
  if (a.capital > b.capital) {
    return 1
  }
  if (a.capital < b.capital) {
    return -1
  }
  return 0
})
console.log(countriesObjects) // sorted by capital

countriesObjects.sort((a, b) => {
  if (a.population > b.population) {
    return 1
  }
  if (a.population < b.population) {
    return -1
  }
  return 0
}) 
console.log(countriesObjects) // sorted by population

// ex2
// const mostSpokenLanguages = (arr, num) => {
//   let allLanguages = []
//   const result = []

//   arr.forEach(el => allLanguages.push(el.languages))
//   let langArray = allLanguages.toString().split(',')

//   let histogram = langArray.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1; // bad understand the logic 
//     return acc;
//   }, [])
//   console.table(typeof(histogram)) // another one solve

//   langArray.forEach(el => {
//     if (result.length !== 0) {
//       if (result.lang === el) {
//         // result.count += 1
//       } else {
//         result.push({lang: el, count: 1})
//       }
//     } else {
//       result.push({lang: el, count: 1})
//     }
//   })

//   console.table(result)

// }
// console.log(mostSpokenLanguages(countriesObjects, 3))

// ex2_try2
// const mostSpokenLanguages2 = (arr, num) => {
//   let mslObj = [] // 'most spoken languages Object'
//   const allLang = [] // 'all Languages'
  
//   arr.forEach(el => allLang.push(el.languages)) // arrays of languages in array [[3], [1]]

//   const eachLangArr = allLang.toString().split(',') // an array which has by 1 el [1,1,1,1,1,]
  
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let newObj = {language: eachLangArr[i],
//                   count: 1}

//     if (mslObj.length === 0) { 
//       // is our obj empty? (if it's empty - retruns 'undefined')
//       // fill it, create new keys and values

//       mslObj.push(newObj)

//       console.log('Added a new Obj 📦 ↓') // result -> ?
//       console.log(mslObj[0])
//     } else { 
//       // a case when the 'allLang' has already something
//       // create a checking and compare languages
//       // 1. if a lang is already exist in a new array -> count +1
//       // 2. if it's a new lang -> create a new obj

      

//       // try to use forEach includes to see if an elmenent exist in the array 💡
//       for (let i = 0; i <= mslObj.length - 1; i++) { // problem 🔧
//         if (mslObj[i].language.toLowerCase() !== eachLangArr[i].toLowerCase()) { // problem 🔧
//           mslObj.push(newObj)
//           console.log(`${mslObj[i].language.toLowerCase()} === ${eachLangArr[i].toLowerCase()}`)
//           console.log('NEW country -> create new Obj 🎲')

          
//           // console.log(`${mslObj[i].language} === ${eachLangArr[i]}`)
//           // console.log(mslObj)
//           // break
//         } else {
//           mslObj[i].count += 1
//           console.log('SAME country -> count +1 🧱')
//           // mslObj[i].count += 1 // ✔
//           // mslObj.push({language: mslObj[i].language, count: 1})

//           break
//         }
//       }
//     }
//   }

//   console.log(mslObj.length) // ✔
//   console.log(mslObj) // main arr/result ❌
//   console.log(eachLangArr) // allLang ✔
//   console.log(arr[0].languages) // gives an language's array ✔
// } // my mistakes (3) were: comparing each el from 1 arr -> to each el to 2 arr (I wanted compare only 1 el from 1t arr -> to all el in 2d arr), also I used in 2d loop the same variable like in 1t, didn't use callback 'find' when I tried to find an el in arrays.

const mostSpokenLanguages2 = (arr, num) => {
  let mslObj = [];
  const allLang = [];
  
  arr.forEach(el => allLang.push(el.languages));

  const eachLangArr = allLang.toString().split(',');
  
  for (let i = 0; i <= arr.length - 1; i++) {
    let newObj = {
      language: eachLangArr[i],
      count: 1
    };

    if (mslObj.length === 0) {
      mslObj.push(newObj);
    } else {
      let languageExists = mslObj.find(obj => obj.language === eachLangArr[i]); // new solution ✔

      if (languageExists) {
        languageExists.count += 1; // new solution ✔
      } else {
        mslObj.push(newObj);
      }
    }
  }

  mslObj.sort((a, b) => {
    if (a.language > b.language) {
      return 1
    }
    if (a.language < b.language) {
      return -1
    }
    return 0
  }) // sorting by ALPHABET

  mslObj.sort((a, b) => {
    if (a.count < b.count) {
      return 1
    }
    if (a.count > b.count) {
      return -1
    }
    return 0
  }) // sorting by COUNT

  return mslObj.slice(0, num)
}

console.table(mostSpokenLanguages2(countriesObjects, 5))

// ex3
const mostPopulatedCountries = (arr, num) => {
  let newObj = {country: '', population: 0}
  const countriesArr = []

  // sorting existed array
  const popSort =  arr.sort((a,b) => {
    if (a.population < b.population) {
      return 1
    }

    if (a.population > b.population) {
      return -1
    }
    return 0
  })

  popSort.map((el) => {
    delete el.currency
    delete el.flag
    delete el.languages
    delete el.capital
  })

  return popSort.slice(0, num)
}
console.table(mostPopulatedCountries(countriesObjects, 5))

// ex4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statisticDescribe = (arr) => {
  const statDescObj = {}
  const varianceArray = []
  
  statDescObj.Count = arr.length
  statDescObj.Sum = arr.reduce((acc, cur) => acc + cur)
  statDescObj.Min = Math.min(...arr)
  statDescObj.Max = Math.max(...arr)
  statDescObj.Range = statDescObj.Max - statDescObj.Min
  statDescObj.Mean = Math.ceil(statDescObj.Sum / statDescObj.Count)
  statDescObj.Median = arr[Math.ceil(statDescObj.Count / 2)]

  // console.log(arr.length) // 25
  // statDescObj.Mode = (function (arr) {
  //     let newArr = arr
  //     for (let i = 0; i <= newArr.length; i++) {
  //         let maxTimes = 1
  //         let number = arr[i]
  //         let findEl = new RegExp(number, 'g')
      
  //         if (findEl > maxTimes) {
  //             maxTimes = findEl
  //             indexOfMax = number
  //     }
  //   } 
  //   return indexOfMax
  // })() // ❌
  // statDescObj.Variance = (function (array) {
  //   let sumOfVarianceArray = 0
  //   array.forEach(el => varianceArray.push(el - statDescObj.Mean))
  //   varianceArray.forEach(el => sumOfVarianceArray += el**2)
  //   return sumOfVarianceArray / varianceArray.length
  // })() // ❌
  // statDescObj['Standart Deviation'] = 0 ❌
  // statDescObj['Frequency Distribution'] = 0 ❌

  return statDescObj
}
console.table(statisticDescribe(ages))