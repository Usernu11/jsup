import { countriesTwo } from "./day5_arrays.js"
import { webTechs } from "./web_techs.js"
// 4.06.2022
const numbers = []
for (let i = 0; i <= 9; i++) {
    console.log(numbers.push(i))
}

let i = 0
while (i <= 10) {
    console.log(`new log ${i}`)
    i++
}

let io = 0
do {
    console.log(`🍕 ${io}`)
    io++
} while (io <= 10)

for (let i = 10; i !== 0; i--) {
    console.log(`${i}`)
}

let a = 10
while (a !== 0) {
    console.log(`🍔${a}`)
    a--
}

let b = 10
do {
    console.log(`⭐${b}`)
    b--
} while (b !== 0)

for (let c = 0; c <= 16; c++) {
    console.log(`✔ ${c}`)
}

for (let d = 1; d <= 7; d++) {
    const lattice = Array()
    let lat = Array(d).fill('#').toString()
    console.log(lat.split('').toString().replace(/,/g, ''))
    // console.log(lat.replace(',', '').replace(',', '').replace(',', '').replace(',', '')) ← this is another way to solve the task
}

for (let e = 0; e <= 11; e++) {
    console.log(`${e} * ${e} = ${e * e}`)
}

console.log('\ni  i^2  i^3')
for (let f = 0; f <= 10; f++) {
    console.log(`${f}   ${f**2}   ${f**3}`)
    // if (f.toString().length >= 1 && f.toString().length <= 2) {
    //     console.log(`${f}  ${f**2}  ${f**3}`)
    // } else if (f.toString().length >= 1 && f.toString().length <= 3){
    //     console.log(`${f}   ${f**2}  ${f**3}`)
    // }
    // ↑ it takes more time than I thought 
}

for (let g = 0; g <= 100; g++) {
    g % 2 === 0
    ? console.log(g)
    : console.log()
}

console.log('🟩\n🟩\n🟩\n🟩')
for (let h = 0; h <= 100; h++) {
    h % 2 !==0
    ? console.log(h)
    : console.log()
}

// ex9 was skipped (math)

// ex10 ↓
console.log('🟩\n🟩\n🟩')
const nums = []
for (let i = 0; i <= 100; i++) {
    console.log(i)
    nums.push(i)
}
console.log(nums)
let sum = 0
for (const num of nums) {
    sum += num
}
console.log(`The sum of all number from 0 to 100 is ${sum}.`)

// ex11
console.log('⭐\n⭐\n⭐')
const evenNums = []
const oddNums = []

for (let i = 0; i <= 100; i++) {
    i % 2 === 0
    ? evenNums.push(i)
    : console.log()
}

// console.log(evenNums)

for (let i = 0; i <= 100; i++) {
    i % 2 !==0
    ? oddNums.push(i)
    : console.log()
}

// console.log(oddNums)

let evenSum = 0
for (const evenNum of evenNums) {
    evenSum += evenNum
}

console.log(`The even sum of all numbers from 1 to 100 is ${evenSum}`)

let oddSum = 0
for (const oddNum of oddNums) {
    oddSum += oddNum
}

console.log(`The odd sum of all numbers from 1 to 100 is ${oddSum}`)

// ex12
const evenNumsArr = []
const oddNumsArr = []
let evenSum2 = 0
let oddSum2 = 0
const evenSumNums = []
const oddSumNums = []
for (let i = 0; i <= 100; i++) {
    i % 2 === 0
    ? evenNumsArr.push(i)
    : oddNumsArr.push(i)
} 

// console.log(evenNumsArr)
// console.log(oddNumsArr)

for (const evenNumArr of evenNumsArr) {
    evenSum2 += evenNumArr
}
// console.log(evenSum2)

for (const oddNumArr of oddNumsArr) {
    oddSum2 += oddNumArr
}
// console.log(oddSum2)

console.log(evenSumNums.push(evenSum2))
console.log(oddSumNums.push(oddSum2))

console.log(evenSumNums.concat(oddSumNums))
// done ✅ ↑

// ex13 is next
const randomNumbers = []
for (let i = 0; i <= 4; i++) {
    let randomNumber = Math.floor(Math.random() * 101)
    randomNumbers.unshift(randomNumber)
}
// console.log(randomNumbers)

console.log("▌")

// ex14 ↓ (still doesn't work) ⚡⚡⚡
const randomNums = []

while(randomNums.length < 5) {
    let newRandomNum = Math.floor(Math.random() * 101)
    if (randomNums.indexOf(newRandomNum) === -1) {
        randomNums.push(newRandomNum)
    } 
}
console.log(randomNums)

// ex15
const randomCharacters = []
for (let i = 0; i <= 4; i++) {
    let randomNum = Math.floor(Math.random() * 256)
    let randomChar = String.fromCharCode(randomNum)
    randomCharacters.push(randomChar)
}
console.log(randomCharacters.toString().replace(/,/g, ''))      // it generate random characters from Unicode between the range from 0 to 256
// it could generate strange unusual characters

// ex15 - upgraded
const randomCharacters2 = []
for (let i = 0; i <= 4; i++) {
    let shortRandomNum = Math.round(Math.random() * 2) // 1 or 2 for condition
    let randomNumsAlphabet = Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25) // a range 97-122
    let randomNumsNumber = Math.ceil(Math.random() + 48) + Math.ceil(Math.random() * 9) // a range 48-57
    let ranAblhabet = String.fromCharCode(randomNumsAlphabet) // random word from an alphabet
    let ranNums = String.fromCharCode(randomNumsNumber) // random number between 0 and 9
    if (shortRandomNum === 1) {
        randomCharacters2.push(ranAblhabet)
    } else {
        randomCharacters2.push(ranNums)
    }
}
console.log(randomCharacters2.toString().replace(/,/g, ''))


// ex15 - upgrading to showing random emojis
let strAnimals = '😺 😸 😻 😽 😼 🙀 😿 😹 😾 🐵 🙈 🙉 🙊 🐶 🐺 🐱 🐭 🐹 🐸 🐯 🐨 🐻 🐷 🐽 🐮 🐗 🐒 🐴 🐑 🐘 🐼 🐧 🐦 🐤 🐥 🐣 🐔 🐍 🐢 🐛 🐝 🐜 🐞 🐌 🐙 🐚 🐠 🐟 🐬 🐳 🐋 🐄 🐏 🐀 🐃 🐅 🐇 🐉 🐎 🐐 🐓 🐕 🐖 🐁 🐂 🐲 🐡 🐊 🐫 🐪 🐆 🐈 🐩 🐾'
const animals = strAnimals.split(' ')
const randomAnimals = []
for (let i = 0; i <= 4; i++) {
    let randomAnimalsNum = Math.floor(Math.random() * animals.length) // a random num in range of animal array
    if (randomAnimals.indexOf(randomAnimalsNum) === -1) {
        randomAnimals.push(animals[randomAnimalsNum])
    } 
}

console.log(randomAnimals.toString().replace(/,/g, '   '))

// level - 2
console.log('▌▌▌▌▌▌▌▌▌ level 2 ▌▌▌▌▌▌▌▌▌')

// ex1
let randomNumRange = Math.round(Math.random() * 1000) // a random num 0 - 1000
const randomCharacters3 = []
for (let i = 0; i <= randomNumRange; i++) {
    let shortRandomNum = Math.ceil(Math.random() * 2) // generate a number 1 or 2
    let randomNumsAlphabet = Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25) // a range 97-122
    let randomNumsNumber = Math.ceil(Math.random() + 48) + Math.ceil(Math.random() * 8) // a range 48-57
    let ranAblhabet = String.fromCharCode(randomNumsAlphabet) // random word from an alphabet
    let ranNums = String.fromCharCode(randomNumsNumber) // random number between 0 and 9
    if (shortRandomNum === 1) {
        randomCharacters3.push(ranAblhabet) // push a random word from an alphabet to an array
    } else {
        randomCharacters3.push(ranNums) // push a random number from an numbers to an array
    }
}
console.log(randomNumRange)
console.log(randomCharacters3.toString().replace(/,/g, ''))

// ex1 - upgraded ⚡ (added uppercase words)

let randomNumRange2 = Math.ceil(Math.random() * 718) // generate a random num 1-718
const randomCharacters4 = []
for (let i = 0; i <= randomNumRange2; i++) {
    let shortRandomNum = Math.ceil(Math.random() * 3) // generate a random num 1-3
    let ranNumEnglish = Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25) // generate a num 97-122
    let ranNumNum = Math.ceil(Math.random() + 48) + Math.ceil(Math.random() * 8) // generate a num 48-57
    let ranEng = String.fromCharCode(ranNumEnglish) // return a word from alphabet by id
    let ranNum = String.fromCharCode(ranNumNum) // return a number from 0-9 numbers by id
    if (shortRandomNum === 1) {
        randomCharacters4.push(ranEng) // adding a random word from the alphabet to the array
    } else if (shortRandomNum === 2) {
        randomCharacters4.push(ranNum) // adding a random number from the numbers 0-9 to the array
    } else {
        randomCharacters4.push(ranEng.toUpperCase()) // adding a random word in UpperCase from the alphabet to the array
    }
}
console.log(`🔵 Total symbols: ${randomNumRange2}`)
console.log(`🔐 Your new password:\n${randomCharacters4.toString().replace(/,/g, '')}`)

// ex2
const hexidemicalNumber = [] // an empty array for hexidemical numbers
for (let i = 0; i <= 5; i++) {
    let shortRandomNumber = Math.ceil(Math.random() * 3) // generate a random num 1-3
    let randomNumberOfWords = Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 5) // generate a random num 97-103
    let randomNumber = Math.ceil(Math.random() + 48) + Math.ceil(Math.random() * 8) // generate a random num 48-57
    let randomAFWord = String.fromCharCode(randomNumberOfWords)  // return a word from A-F alphabet by id
    let random09Number = String.fromCharCode(randomNumber) // return a number 0-9 by id
    if (shortRandomNumber === 1) {
        hexidemicalNumber.push(randomAFWord) // adding a random word from the A-F alphabet to the array
    } else if (shortRandomNumber === 2) {
        hexidemicalNumber.push(random09Number) // adding a random number 0-9 to the array
    } else {
        hexidemicalNumber.push(randomAFWord.toUpperCase()) // adding a random word with upper case from the A-F alphabet to the array
    }
}

console.log(`#${hexidemicalNumber.toString().replace(/,/g, '')}`) // return a result to console
// document.getElementById('body').style.backgroundColor = `#${hexidemicalNumber.toString().replace(/,/g, '')}` // using the result above for randomly changing background-color of main document (body) 😀

// ex3
// max number of color 255 (white)
// min number of color 0 (black)
const rgbColor = []
for (let i = 0; i <= 2; i++) {
    let randomNumber = Math.round(Math.random() * 255) // generate a ranodm number 0-255
    rgbColor.push(randomNumber) // adding a random number to the array
}

console.log(rgbColor)
console.log(`rgb(${rgbColor.toString()})`)
// document.getElementById('body').style.backgroundColor = `rgb(${rgbColor.toString()})` // using the result above for randomly changing background-color of main element 'body' by id 😀
document.getElementById('body').style.backgroundImage = `linear-gradient(90deg, #${hexidemicalNumber.toString().replace(/,/g, '')}, rgb(${rgbColor.toString()}))` // using the results of (hexidemical color + rbg color) above for randomly changing background-color of main element 'body' 😍
console.log(`Now is activated new gradient using the colors:\n#${hexidemicalNumber.toString().replace(/,/g, '')}\nrgb(${rgbColor.toString()})`)

// ex4
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const newCountriesArray = []
for (let i = 0; i <= 10; i++) {
    if (countriesTwo.includes('Albania')) { // if the array has an item called 'Albania' do code below
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Albania'), countriesTwo.indexOf('Albania') + 1)).toString()) // add to new array those item by it index
        countriesTwo.splice(countriesTwo.indexOf('Albania'), 1) // remove from the first array the item which we already found for checking other ountries
    } else if (countriesTwo.includes('Bolivia')) { // in other cases to same to other countries
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Bolivia'), countriesTwo.indexOf('Bolivia') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Bolivia'), 1)
    } else if (countriesTwo.includes('Canada')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Canada'), countriesTwo.indexOf('Canada') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Canada'), 1)
    } else if (countriesTwo.includes('Denmark')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Denmark'), countriesTwo.indexOf('Denmark') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Denmark'), 1)
    } else if (countriesTwo.includes('Ethiopia')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Ethiopia'), countriesTwo.indexOf('Ethiopia') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Ethiopia'), 1)
    } else if (countriesTwo.includes('Finland')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Finland'), countriesTwo.indexOf('Finland') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Finland'), 1)
    } else if (countriesTwo.includes('Germany')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Germany'), countriesTwo.indexOf('Germany') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Germany'), 1)
    } else if (countriesTwo.includes('Hungary')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Hungary'), countriesTwo.indexOf('Hungary') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Hungary'), 1)
    } else if (countriesTwo.includes('Ireland')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Ireland'), countriesTwo.indexOf('Ireland') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Ireland'), 1)
    } else if (countriesTwo.includes('Japan')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Japan'), countriesTwo.indexOf('Japan') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Japan'), 1)
    } else if (countriesTwo.includes('Kenya')) {
        newCountriesArray.push((countriesTwo.slice(countriesTwo.indexOf('Kenya'), countriesTwo.indexOf('Kenya') + 1)).toString())
        countriesTwo.splice(countriesTwo.indexOf('Kenya'), 1)
    }
}

console.log(newCountriesArray.toString().toUpperCase().split(','))

// ex5
const countriesNameLength = []
for (let i = 0; i <= newCountriesArray.length - 1; i++) {
    countriesNameLength.push(newCountriesArray[i].length)
}
console.log(`The name length of each country are ↓:`)
console.log(countriesNameLength)

//ex6
const countriesDetail = []
for (let i = 0; i <= newCountriesArray.length - 1; i++) {
    let countryDetail = [] // an empty array for each country data
    countryDetail.push(newCountriesArray[i], newCountriesArray[i].slice(0,3).toUpperCase(), newCountriesArray[i].length) // add to empty array 3 tipes of data (country name, short country name with UpperCase, length of full country name)
    countriesDetail.push(countryDetail) // add to other empty array of all countries a separate array of each country (with data)  
}

// First of all I did it for first item manually to check is it works ↓
// console.log(countryDetail.push(newCountriesArray[0], newCountriesArray[0].slice(0,3).toUpperCase(), newCountriesArray[0].length))
// console.log(countriesDetail.push(countryDetail))
// console.log(countryDetail)
// console.log(countriesDetail)
console.table(countriesDetail) // result

// ex7
const landCountries = []
const mainlandCountries = []
for (let i = 0; i <= countriesDetail.length - 1; i++) {
    if (countriesDetail[i].toString().includes('land')) {
        landCountries.push(countriesDetail[i][0])
    } else {
        mainlandCountries.push(countriesDetail[i][0])
    }
}
// console.log(countriesDetail[5][0]) // get the result (id - 0) from array which placed in main array (id - 5)
// console.log(countriesDetail[5].includes('land')) // don't work
// console.log(countriesDetail[5].toString().includes('land')) // it works
console.log(`🗾 The land countries: ${landCountries.join(', ')}.`)
console.log(`🌎 The mainland countries: ${mainlandCountries.join(', ')}.`)

// ex8
const iaCountries = []
const otherCountries = []
for (let i = 0; i <= countriesDetail.length - 1; i++) {
    if (countriesDetail[i].toString().includes('ia')) {
        iaCountries.push(countriesDetail[i][0])
    } else {
        otherCountries.push(countriesDetail[i][0])
    }
}
console.log(`🤖 The countries which ends 'ia': ${iaCountries.join(', ')}.`)
console.log(`👾 The rest one countries: ${otherCountries.join(', ')}.`)

// ex9
// merge the branches that you have
console.table(countriesDetail)
const cnl = [] // countries name length

for (let i = 0; i <= countriesDetail.length - 1; i++) {
    cnl.unshift(countriesDetail[i][2]) // add an empty array length of each counrty name
}

let cnlMax = Math.max(...cnl) // find max value from the array
for (let i = 0; i <= countriesDetail.length - 1; i++) {
    if (cnlMax === countriesDetail[i][2]) {
        console.log(`🐍 The biggest length of a name counrty is: ${countriesDetail[i][0]}\n which = ${countriesDetail[i][2]}.`)
    }
}
// console.log(cnl.push(countriesDetail[0][2])) // test for ↑
// console.log(cnl.push(countriesDetail[1][2])) // test for ↑
// console.log(cnl) // test for ↑
// console.log(cnlMax) // test for ↑

//ex10
const fCNLC = [] // 5 characters name length countries 
for (let i = 0; i <= countriesDetail.length - 1; i++) {
    if (countriesDetail[i][2] === 5) {
        console.log(`👽 ${countriesDetail[i][0]}`)
        fCNLC.push(countriesDetail[i][0])
    }
}
console.log(fCNLC)

//ex11
console.log(webTechs) // check is it works right ✅
const wtNameLength = [] // create a new empty array for length's tech names
for (let i = 0; i <= webTechs.length - 1; i++) {
    wtNameLength.push(webTechs[i].length) // add to the empty array lengh of each tech
}
console.log(wtNameLength) // check the new array for exepted values ✅

let wtNameLengthMax = Math.max(...wtNameLength) // find a max value from the tech name length array
for (let i = 0; i <= webTechs.length - 1; i++) {
    if (webTechs[i].length === wtNameLengthMax) { // using the contidion find the longest word from the webtech array
        console.log(`🐱‍👤 The longest word from webtech array is: ${webTechs[i]}.`) // print the winner 😄
    }
}

//ex12
const wtNLjs = [] // an empty web tech array with values (name of tech & length of name) 
const wtNL = []
for (let i = 0; i <= webTechs.length - 1; i++) {
    let jsRemover = webTechs[i].replace(/.js/gi, '') // remove "".js" from each el
    wtNL.push([jsRemover, jsRemover.length]) 
}
console.table(wtNL)

//ex13 (June 19/20)
const stack = ['MongoDB', 'Express', 'React', 'Node'] // create an array of MERN stack
const mernStack = [] // create an empty array of MERN stack abbreviation
console.log(stack[0].split('')) // check how works split
for (let i = 0; i <= stack.length - 1; i++) {
    let stackLetters = stack[i].split('') // create a varribale for each stack and then separate each stack to separate letters
    mernStack.push(stackLetters[0].toUpperCase()) // add to the empty MERN stack array first letter of each stack with upperCase method
}
console.log(`⚡ ${mernStack.toString().replace(/,/g, '')} ⚡`) // print the result convertered to string and removed useless comas

//ex14
const fullStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] // created an array of full stack
for (let i = 0; i <= fullStack.length - 1; i++) {
    console.log(`✅ ${fullStack[i]}`) // print each el of the array above
}
console.log('') // just separate line

for (const stack of fullStack) {
    console.log(`🟣 ${stack}`) // print each el of the array above using "for of" loop
}

//ex15
// unshift + push | shift / pop (just hint for me - tools, except reverse)
const fruits = ['🍌', '🍊', '🥭', '🍋'] // create an array of fruits
console.log(`BEFORE: ${fruits}`) // print fruits array before editing
let fl = fruits.length // length of the fruits array (static value! it the loop it will change every time and pop method will revome only half of the fruits array)
for (let i = 0; i <= fl - 1; i++) {
    fruits.push(fruits[fl - 1 - i])
}

for (let i = 0; i <= fl - 1; i++) {
    fruits.shift()
}
console.log(`AFTER: ${fruits}`) // pring fruits array after editing
// console.log(fruits)


// YOU SHOULD DO IT USING ONE LOOP
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()