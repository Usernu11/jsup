import { countriesTwo } from "./day5_arrays.js";
// Level 1
// ex1
function fullName (firstName, lastName) { // created a function with 2 params
    console.log(`Your full name: ${firstName} ${lastName}`) // print the result of both params (first name and last name)
}

fullName('Oscar', 'Grand') // calling the function

// ex1 ⚡ (with promt - ⚠ for testing the function → uncomment the following 2 lines of promts (10-11 and 17 lines) which markered like ⭕)
// let firstName = prompt('Enter your first name') // create a promt for universal using the fullName function ⭕
// let lastName = prompt('Enter your last name') // create a promt with the same goal ⭕

function fullName2 (firstName, lastName) { // create the same function, but with another name of the function with 2 params for our promts
    console.log(`Your full name: ${firstName} ${lastName}`) // add the values from promts for printing
}

// fullName2(firstName, lastName) // calling the function ⭕

// ex2
function fullName3 (firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(`👾 The full name is: ${fullName3('Bohdan', 'Lavrentiev')}`)

// ex3 
function addNumbers (num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log(`💥 The sum of the numbers are: ${addNumbers(16, 718)}`)

// ex4
function calculateRectangleArea (length, width) {
    return length * width
}

console.log(`🟦 The area of a rectangle is: ${calculateRectangleArea(16, 718)}`)

// ex5
function calcRectanglePerim (length, width) {
    return (length + width) * 2
}

console.log(`📐 The perimeter of a rectangle is: ${calcRectanglePerim(16, 718)}`)

// ex6
function calcVolumeRectanglePrism (length, width, height) {
    return length * width * height
}

console.log(`❎ The volume of a rectangle prism is: ${calcVolumeRectanglePrism(16, 718, 7)}`)

// ex7
function  calcCircleArea (r) {
    const PI = 3.14
    return PI * (r)**2
}

console.log(`🟡 The area of a circle is: ${calcCircleArea(16)}`)

// ex8
function calcCircumference (r) {
    const PI = 3.14
    return 2 * (PI * r)
}

console.log(`⭕ The circumference of a circle is: ${calcCircumference(16)}`)

// ex9
function calcDensity (mass, volume) {
    let density = mass / volume
    return Math.round(density, 5)
}

console.log(`💢 The density of a substance is: ${calcDensity(16718, calcVolumeRectanglePrism(16, 718, 7))}`)

// ex10
function calcSpeed (distance, time) {
    return distance / time
}

console.log(`🚄 The speed of an object is: ${calcSpeed(718, 16)}`)

// ex11
function calcWeight (mass, gravity = 9.81) {
    return mass * gravity
}

console.log(`⚖ The weight of an object is: ${calcWeight(16)}`)

// ex12
function covertCtoF (oC) {
    return (oC * 9 / 5) + 32.
}

console.log(`🌡 The your oC on oF is: ${covertCtoF(16)}`)

// ex13
// bmi = weight in Kg / (height x height) in m2
function calcBMI (weight, height) {
    let bmi = Math.trunc(weight / ((height**2) / 10000))
    if (bmi < 18.5) {
        return `🦎 Your BMI is: Underweight = ${bmi}`
    } else if (bmi < 24.9 && bmi >= 18.5) {
        return `🦝 Your BMI is: Normal = ${bmi}`
    } else if (bmi < 29.9 && bmi >= 25) {
        return `🐗 Your BMI is: Overweight = ${bmi}`
    } else {
        return `🐮 Your BMI is: Obese = ${bmi}`
    }
}

console.log(calcBMI(80, 185))

// ex14
// let month = prompt('enter a month') ⭕
function checkSeason (month) {
    let monthLower = month.toLowerCase()
    if (monthLower === 'december' || monthLower === 'january' || monthLower === 'february') {
        return `❄ Today is Winter! Don't forget a warm hat and a scarf.`
    } else if (monthLower === 'march' || monthLower === 'april' || monthLower === 'may') {
        return `🌱 Today is Spring! It could be rainy, don't forget your umbrella and sunglasses.`
    } else if (monthLower === 'june' || monthLower === 'july' || monthLower === 'august') {
        return `🌞 Today is Summer! It could be hot outdoor. Don't forget your sunglasses.`
    } else if (monthLower === 'september' || monthLower === 'october' || monthLower === 'november') {
        return `🍁 Today is Fall! Don't forget your umbrealla, because it could be rainy outdoor.`
    } else {
        return `❌ Write a correct month's name.`
    }
}

// console.log(checkSeason(month)) ⭕

// ex15
function findMax (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `✴ The max value is: ${num1}`
    } else if (num2 > num1 && num2 > num3) {
        return `✴ The max value is: ${num2}`
    } else {
        return `✴ The max value is: ${num3}`
    }
}

console.log(findMax(16, -12, 95))

// level 2
// ex1 - skipped (I don't recall the knowledge of the Math)
// ex2 - skipped (Math) 
// ex3
const printArray = (array) => {
    for (let i = 0; i <= array.length - 1; i++) {
        console.log(`${array[i]}`)
    }
}

const nums = [8,7,4,1,9,8]
const strs = ['🥝 Fruit', '🛒 Cart', '🏐 Volleyball', '♟ Pawn', '🧩 Puzzle']

printArray(nums)
printArray(strs)

// ex4
// 08/01/2020 04:08 (just hint)
let now = new Date()
const showTime = () => {
    let month = now.getMonth() + 1
    let day = now.getDate()
    let year = now.getFullYear()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (month.length < 2) {
        month = `0${now.getMonth()}`
    }
    if (day.length < 2) {
        day = `0${now.getDate()}`
    }
    if (hours.length < 2) {
        hours = `0${now.getHours()}`
    }
    if (minutes.length < 2) {
        minutes = `0${now.getMinutes()}`
    }
    return `${month}/${day}/${year} ${hours}:${minutes}`
}

console.log(`⌚ Time: ${showTime()}`)

// ex5
const swapValues = (x, y) => {
    const values = [x, y]
    const swap = values.reverse()
    return `X => ${swap[0]}\nY => ${swap[1]}`
}

console.log(swapValues(16, 2))

// ex6
const reverseArray = (array) => {
    const reversed = []
    for (let i = 0; i <= array.length - 1; i++) {
        reversed.push(array[array.length - 1 - i])
    }
    return reversed
}

const numbers = [1, 2, 3, 4, 5]
const letters = ['A', 'B', 'C', 'E', 'F']
const fruits = ['🥝', '🍇', '🍉', '🍒', '🍍']
console.log(reverseArray(numbers))
console.log(reverseArray(letters))
console.log(reverseArray(fruits))

// ex7
const capitalize = (array) => {
    const capitalizeArray = []
    for (let i = 0; i <= array.length - 1; i++) {
        let wordByLetters = array[i].split('')  // separate each word to letters
        let capitalizer = wordByLetters[0].toUpperCase() // capitalize first letter
        wordByLetters.shift() // revome first lowerCase letter from letters array
        wordByLetters.unshift(capitalizer) // add to the start of the letters array capitalized letter
        capitalizeArray.push(wordByLetters.toString().replace(/,/g, '')) // covert separated word's array to string and removes useless commas
    }
    return capitalizeArray
}

const words = ['apple', 'javaScript', 'bohdan', 'function']
console.log(capitalize(words))

// ex8
const array = []
const addItem = (item) => {
    array.push(item)
    return array
}
console.log(addItem('🧶'))
console.log(addItem('💎'))
console.log(addItem(718))
console.log(addItem('⛑'))
console.log(addItem('🎱'))

// ex9
const removeItem = (index) => {
    array.splice(index, 1)
    return array
}
console.log(removeItem(3))
console.log(removeItem(2))

// ex10
const sumNumbers = (number) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return `🎇 The sum of your number (${number}) is: ${sum}`
}
console.log(sumNumbers(16))

// ex11
const sumOdds = (number) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return `✨ The sum of odds of the number (${number}) is: ${sum}`
}
console.log(sumOdds(16))

// ex12
const sumEven = (number) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return `🎆 The sum of the even's number (${number}) is: ${sum}`
}
console.log(sumEven(16))

// ex13
const sumEvenAndOdds = (number) => {
    let sumOdd = 0
    let sumEven = 0
    if (number > 0) {
        for (let i = 0; i <= number; i++) {
            if (i % 2 === 0) {
                sumEven += i
            } else {
                sumOdd += i
            }
        }
    } else {
        return `❌ Your number isn't positive`
    }
    return `Your number is (${number}):\n🎟 The sum of odds is: ${sumOdd}\n🎗 The sum of even is: ${sumEven}`
}
console.log(sumEvenAndOdds(-16))
console.log(sumEvenAndOdds(16))

// ex14
const calcSum = (...nums) => { // the function takes any arguments
    let sum = 0
    let argLength = nums.length // number of our arguments
    let valuesArr = nums.toString().split(',') // our args
    let range = 0
    if (argLength > 1) {
        for (let i = 0; i <= argLength - 1; i++) {
            range += parseInt(valuesArr[i]) // the range will allow us to know how many times we will do sum
        }
        for (let i = 0; i <= range; i++) {
            sum += i
        }
    } else {
        range += parseInt(nums)
        for (let i = 0; i <= nums; i++) {
            sum += i
        }
    }
    return `🎠 The args' number: ${argLength}\n🏆 The args' values: ${valuesArr.join(' | ')}\n🪀 The values' range: ${range}\n⛓ The args' sum: ${sum}`
}
console.log(calcSum(16, 18, 718))

// ex15
const genRandomUserIp = () => {
    const newUserIPv4 = []
    const newUserIPv6 = []
    const randomIPv6Item = [] // 4 values of numbers of letters
    for (let i = 0; i <= 3; i++) { // the loop for IPv4
        let randomNum = Math.round(Math.random() * 255)
        newUserIPv4.push(randomNum)
    }
    for (let i = 0; i <= 7; i++) { // the loop for IPv6
        for (let i = 0; i <= 3; i++) { // create 4 values for first set of IPv6 from 8th
            let randomNum = Math.floor(Math.random() * 9) // gen a random num 0-9  
            let randomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25)) // gen a random enlgish letter
            let shortRandomNum = Math.floor(Math.random() * 2) // gen a random num 0-1 for condition below
            if (shortRandomNum === 1) {
                randomIPv6Item[i] = (randomNum)
            } else {
                randomIPv6Item[i] = (randomLetter)
            }
        }
        newUserIPv6.push(randomIPv6Item.join('')) // add to IPv6 array - four values (without commas)
    }
    return `🎲 Your new IP (IPv4): ${newUserIPv4.join('.')}\n📍 Your new IP (IPv6): ${newUserIPv6.join(':')}`
}
console.log(genRandomUserIp())

// ex16
const genRandomMACaddress = () => {
    const newMACaddress = []
    const MACset = []
    for (let i = 0; i <= 5; i++) {
        for (let i = 0; i <= 1; i++) { // loop for MAC set
            let randomNum = Math.floor(Math.random() * 9) // gen a random num 0-9  
            let randomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25)) // gen a random enlgish letter
            let shortRandomNum = Math.floor(Math.random() * 2) // gen a random num 0-1 for condition below
            if (shortRandomNum === 1) {
                MACset[i] = (randomNum)
            } else {
                MACset[i] = (randomLetter)
            }
        }
        newMACaddress.push(MACset.join(''))
    }
    return `📻 A random MAC address: ${newMACaddress.join(':')}`
}
console.log(genRandomMACaddress())

// ex17
const genRandomHexNumber = () => {
    const newHexNumber = []
    for (let i = 0; i <= 5; i++) {
        let randomNum = Math.floor(Math.random() * 9) // gen a random num 0-9  
        let randomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 5)) // gen a random enlgish letter from A to F
        let shortRandomNum = Math.floor(Math.random() * 2) // gen a random num 0-1 for condition below
        if (shortRandomNum === 1) {
            newHexNumber[i] = (randomNum)
        } else {
            newHexNumber[i] = (randomLetter)
        }
    }
    return `#${newHexNumber.join('')}`
}

// document.getElementById('randomHexNumber').style.backgroundColor = `${genRandomHexNumber()}` // paint an el in HTML in a random hexa color
// document.getElementById('randomHexNumber').innerHTML += `${genRandomHexNumber()}` // add text to an el - what is current hex color
console.log(`🎨 The new random hexademical number is:\n${genRandomHexNumber()}`)

// ex18
const genUserId = () => {
    const userId = []
    for (let i = 0; i <= 6; i++) {
        let randomNum = Math.floor(Math.random() * 9) // gen random num
        let randomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25)) // gen random letter
        let shortRandomNum = Math.floor(Math.random() * 2) // gen a random num 0-1 for condition below
        if (shortRandomNum === 1) {
            userId.push(randomNum)
        } else {
            userId.push(randomLetter)
        }
    }
    return `👔 Your new userId: ${userId.join('').toString().toUpperCase()}`
}
console.log(genUserId())

// Level 3
// ex1
// let userLength = prompt(`Your ID's length`) //⭕
// let userNums = prompt(`How many IDs?`) //⭕
const userIdGeneratedByUser = (userLength, userNums) => {
    const userIds = []
    const userIdset = []
    for (let i = 0; i <= userNums - 1; i++) {
        for (let p = 0; p <= userLength - 1; p++) {
            let randomNum = Math.floor(Math.random() * 9) // gen random num
            let randomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25)) // gen random letter
            let shortRandomNum = Math.floor(Math.random() * 3) // gen a random num 0-2 for condition below
            if (shortRandomNum === 0) {
                userIdset[p] = randomNum
            } else if (shortRandomNum === 1) {
                userIdset[p] = randomLetter
            } else {
                userIdset[p] = randomLetter.toUpperCase()
            }
        }
        userIds.push(userIdset.join(''))
    }
    return `${userIds.join(`\n`)}`
}
// console.log(`🧢 Your new ID(s):\n${userIdGeneratedByUser(userLength, userNums)}`) //⭕

// ex2
const rgbColorGenerator = () => {
    const rgbColor = []
    for (let i = 0; i <= 2; i++) {
        let randomNum = Math.round(Math.random() * 255)
        rgbColor[i] = randomNum
    }
    return `rgb(${rgbColor})`
}

console.log(`🥏 A new RGB color:\n${rgbColorGenerator()}`)
// document.getElementById('randomRGBcolor').style.backgroundColor = `${rgbColorGenerator()}`
// document.getElementById('randomRGBcolor').innerHTML += `${rgbColorGenerator()}`

// ex3
const arrayOfHexaColors = (num = 1) => {
    const hexColors = []
    const hexSet = []
    for (let i = 0; i <= num - 1; i++) {
        for (let p = 0; p <= 5; p++) {
            let randomNum = Math.floor(Math.random() * 9) // gen a random num 0-9  
            let randomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 5)) // gen a random enlgish letter from A to F
            let shortRandomNum = Math.floor(Math.random() * 2) // gen a random num 0-1 for condition below
            if (shortRandomNum === 1) {
                hexSet[p] = (randomNum)
            } else {
                hexSet[p] = (randomLetter)
            }
        }
        hexColors.push(`#${hexSet.join('')}`)
    }
    // document.getElementById('HEXcolors').style.background = `linear-gradient(90deg, ${hexColors[0]}, ${hexColors[1]}, ${hexColors[2]}, ${hexColors[3]}, ${hexColors[4]}, ${hexColors[5]})` // just a fun additional to my HTML
    return `${hexColors.join('\n')}`
}

console.log(`🧮 Your HEX colors:\n${arrayOfHexaColors(6)}`)

// ex4
const rgbColors = (num = 1) => {
    const rgbColorsArray = []
    const rgbColor = []
    for (let i = 0; i <= num - 1; i++) { // loop for several gen rgb colors
        for (let p = 0; p <= 2; p++) { // loop for gen 1 rgb color
            let randomNum = Math.round(Math.random() * 255)
            rgbColor[p] = randomNum
        }
        rgbColorsArray.push(`rgb(${rgbColor})`)
    }
    // document.getElementById('RGBcolors').style.background = `radial-gradient(at top left, ${rgbColorsArray})` // just for fun additional to my html
    return rgbColorsArray.join('\n')
}
console.log(`📚 Your rgb colors:\n${rgbColors(2)}`)

// ex5 --- 
const convertHexaToRgb = (hexaColor) => {
    const hexColor = hexaColor.replace('#', '').toUpperCase().split('') // ['A', '2', 'F', '6', 'C', '2']
    const hexBase = ['ABCDEF'] 
    const hexBaseEqual = [10,11,12,13,14,15] // equals to hexBase letters
    const RGB = [] // an array for converted hexa values to "decimal base 10"
    const RGBtimed = [] // an array for calculated odds values (0,2,4) in "decimal base 10"
    const RGBcolor = [] // an array for calculated R-G-B colors

    for (let i = 0; i <= 5; i++) { // a loop for RGB array
        let hexIndex = hexBase.toString().indexOf(hexColor[i]) // return index or -1
        if (hexIndex !== -1) {
            RGB.push(hexBaseEqual[hexIndex])
        } else {
            RGB.push(parseInt(hexColor[i]))
        }
    }

    for (let i = 0; i <= 5; i++) { // a loop for RGBtimed array
        if ((RGB.length - 1 - i) % 2 !== 0) { // odd - 0,2,4
            RGBtimed.push(RGB[i] * 16)
        } else {
            RGBtimed.push(RGB[i])
        }
    }

    for (let i = 0; i <= 5; i++) { // a loop for RGBcolor array (result)
        if (i % 2 === 0) {
            RGBcolor.push(RGBtimed[i] + RGBtimed[i + 1])
        }
    }

    // console.log(hexColor.join('')) // shows hex color
    // console.log(RGB) // shows an RGB array (without calculating)
    return `rgb(${RGBcolor})`
}

console.log(`💫 Convert a random HEX → RGB:\n${convertHexaToRgb(genRandomHexNumber())}`)

// ex6
const convertRgbToHexa = (rgb) => {
    let rgbClean = rgb.replace('rgb(', '').replace(')', '')
    const rgbCleanArr = rgbClean.split(',')
    const hexBase = ['ABCDEF'].toString()
    const hexBaseEqual = [10,11,12,13,14,15] // equals to hexBase letters
    const Rdec = []
    const Gdec = []
    const Bdec = []
    
    const Rhex = []
    const Ghex = []
    const Bhex = []
    
    const convertedHexColor = [] // an array for result

    Rdec.push(Math.floor(rgbCleanArr[0] / 16), rgbCleanArr[0] % 16) // converting to decimal base
    Gdec.push(Math.floor(rgbCleanArr[1] / 16), rgbCleanArr[1] % 16)
    Bdec.push(Math.floor(rgbCleanArr[2] / 16), rgbCleanArr[2] % 16)
    
    
    for (let i = 0; i <= 1; i++) { // a loop for R color
        let hexBaseEqualIndex = hexBaseEqual.indexOf(Rdec[i])
        if (hexBaseEqualIndex !== -1) {
            Rhex.push(hexBase[hexBaseEqualIndex]) // push a HEX letter
        } else {
            Rhex.push(Rdec[i]) // push a HEX number
        }
    }

    for (let i = 0; i <= 1; i++) { // a loop for G color
        let hexBaseEqualIndex = hexBaseEqual.indexOf(Gdec[i])
        if (hexBaseEqualIndex !== -1) {
            Ghex.push(hexBase[hexBaseEqualIndex]) // push a HEX letter
        } else {
            Ghex.push(Gdec[i]) // push a HEX number
        }
    }

    for (let i = 0; i <= 1; i++) { // a loop for B color
        let hexBaseEqualIndex = hexBaseEqual.indexOf(Bdec[i])
        if (hexBaseEqualIndex !== -1) {
            Bhex.push(hexBase[hexBaseEqualIndex]) // push a HEX letter
        } else {
            Bhex.push(Bdec[i]) // push a HEX number
        }
    }

    convertedHexColor.push(Rhex + Ghex + Bhex)
    // console.log(rgb) // the rgb color in the function
    return `#${convertedHexColor.toString().replace(/,/g, '')}`

    // tests ↓
    console.log(hexBase)
    console.log(hexBaseEqual.indexOf(Rdec[0])) // return index of hexBaseEqual array or -1
    console.log(`R G B hex: ${Rhex} ${Ghex} ${Bhex}`)
    
    console.log(Rdec, Gdec, Bdec)
    console.log(rgbClean)
    console.log(rgbCleanArr[0] / 16, rgbCleanArr[0] % 16)
    console.log(`Rhex: ${Rhex}`)
}
console.log(`✨ An RGB color was converted to a HEX color:\n${convertRgbToHexa(convertHexaToRgb(genRandomHexNumber()))}`)

// ex7
const generateColors = (type, amount) => {
    const rgbColor = []
    const RGBcolors = []
    const hexColor = []
    const HEXcolors = []

    if (type === 'rgb') { // RGB
        for (let i = 0; i <= amount - 1; i++) { // how many times gen
            for (let p = 0; p <= 2; p++) { // gen an rgb color
                let rgbRandomNum = Math.round(Math.random() * 255)
                rgbColor[p] = rgbRandomNum
            }
            RGBcolors[i] = `${i + 1} 🔹 rgb(${rgbColor})` // add to RGB's array a RGB color with 'rgb()' construction
        }
        return `🔵 Your new '${amount}' RGB colors:\n${RGBcolors.join(`\n`)}`
    } else if (type === 'hex') { // HEX
        for (let i = 0; i <= amount - 1; i++) { // how many times gen
            for (let p = 0; p <= 5; p++) { // gen a hex color
                let hexRandomNum = Math.floor(Math.random() * 9) // 0-9
                let hexRandomLetter = String.fromCharCode(Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 5)) // A-F
                let shortNum = Math.floor(Math.random() * 3) // 0-2
                if (shortNum === 0) {
                    hexColor[p] = (hexRandomNum) // num
                } else if (shortNum === 1) {
                    hexColor[p] = (hexRandomLetter) // letter
                } else {
                    hexColor[p] = (hexRandomLetter.toUpperCase()) // big letter
                }
            }
            HEXcolors.push(`${i + 1} 🔸 #${hexColor.toString().replace(/,/g, '')}`) // add a number of an each color + removed commas
        }
        return `🟢 Your new '${amount}' HEX colors:\n${HEXcolors.join('\n')}`
    } else {
        return `❌ Enter a type of color 'rgb' or 'hex'`
    }
}
console.log(generateColors('hex', 5))

// ex8
const shuffleArray = (arr) => {
    let arrLength = arr.length
    // const arrSort = arr.sort() // a simple way to shuffle array
    const shuffledArrIndexes = []
    const shuffledArray = []
    const shuffledNums = new Set() // "A JavaScript Set is a collection of unique values"
    while(shuffledArrIndexes.length < arrLength) { // a loop which shuffle an array indexes
        let newRandomNum = Math.floor(Math.random() * arrLength) // gen a random num in range of arg length
        if (shuffledArrIndexes.indexOf(newRandomNum) === -1) {
            shuffledArrIndexes.push(newRandomNum)
        } 
    }
    for (let i = 0; i <= arrLength - 1; i++) { // a loop for shuffling array
        shuffledArray[i] = arr[shuffledArrIndexes[i]] // add to a new array exist values by new indexes 
    }
    // while (shuffledNums.size !== arrLength) { // a modern solution in 1 loop
    //     shuffledNums.add(Math.floor(Math.random() * arrLength) + 1)
    // }    
    // console.log([...shuffledNums])
    return `The old array: ${arr}\nThe shuffled array: ${shuffledArray}`
}
const myNewArray = ['👾','🤖','💩','👽','🐱‍👤','👻']
console.log(shuffleArray(myNewArray))

// ex9 (skipped - Math)
// ex10
// number, string, boolean, object, null, undefined
const isEmpty = (param) => {
    let type = typeof(param)
    // console.log(type)
    if (type === 'number') {
        if (param === 0) {
            return `⭕ Your parametr (${param}) is empty.`
        } else {
            return `🔵 Your prarmetr (${param}) isn't empty`
        }
    } else if (type === 'string') {
        if (param.length === 0) {
            return `⭕ Your parametr (${param}) is empty.`
        } else {
            return `🔵 Your prarmetr (${param}) isn't empty.`
        }
    } else if (param === undefined) {
        return `⭕ Your parametr (${param}) is empty.`
    } else if (type === 'boolean') {
        return  `🔵 Your prarmetr (${param}) isn't empty.`
    } else if (type === 'object') {
        if (param === null) {
            return `⭕ Your parametr (${param}) is empty.`
        } else if (param.length === 0) {
            return `⭕ Your parametr (${param}) is empty.`
        } else {
            return `🔵 Your prarmetr (${param}) isn't empty.`
        }
    } else if (param === null) {
        return `⭕ Your parametr (${param}) is empty.`
    }
}
console.log(isEmpty(16))

// ex11
const sumNums = (...nums) => {
    const allNums = [...nums]
    let sum = 0
    for (let i = 0; i <= allNums.length - 1; i++) {
        sum += allNums[i]
    }
    return `🟦 The sum of your numbers [${allNums}] is: ${sum}`
}
console.log(sumNums(16, 4, 1212, 99484, 1212))

// ex12
const sumOfArrayItems = (arr) => {
    const arrLength = arr.length
    let sum = 0
    const nAn = [] // array for "not a number" values
    for (let i = 0; i <= arrLength - 1; i++) {
        if (typeof(arr[i]) === 'number') {
            sum += arr[i]
        } else {
            nAn.push(arr[i])
        }
    }
    return `🎹 The amount of array's items are: ${arrLength}\n🧶 The array's numbers sum is: ${sum}\n🎈 The other values (not numbers) in the array are:\n ${nAn}`
}
const simpleArray = [16, 718, 1121, 12, '🎗', true, '🏐', '1', undefined, null]
console.log(sumOfArrayItems(simpleArray))

// ex13
const average = (arr) => {
    const numsArr = []
    for (let i = 0; i <= arr.length - 1; i++) { // a loop which checks is a value a number
        if (typeof(arr[i]) === 'number') {
            numsArr.push(arr[i])
        } else {
            console.log(`🟡 That '${arr[i]}' is not a number`)
        }
    }

    let sum = 0
    for (let i = 0; i <= numsArr.length - 1; i++) { // a loop which do sum of all numbers
        sum += numsArr[i]
    }
    let averageNumber = (sum / numsArr.length).toFixed(2)
    return `📿 The average number from the numbers [${numsArr}] is:\n${averageNumber}`
}
const numsArr = [1,2,16,718,16]
const otherArr = [1,2,4,56,'🧨',true,' ']
console.log(`${average(otherArr)}\n\n${average(numsArr)}`)

// ex14
const modifyArray = (arr) => {
    let arrLength = arr.length
    let modifiedArr = []
    if (arrLength < 5) {
        return `❌ Sorry, your array should have 5+ items.`
    } else {
        modifiedArr = modifiedArr.concat(arr)
        // console.log(modifiedArr.concat(arr)) ✔
    }
    // console.log(modifiedArr) ✔
    modifiedArr.splice(4, 1, modifiedArr[4].toUpperCase() + ' ✨')

    return `${modifiedArr.join('\n\n')}`
}
const strArr = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth']
console.log(modifyArray(strArr))

// ex15 - skipped (Math)
// ex16
const isUnique = (arr) => {
    // console.log(arr) ✔
    for (let i = 0; i <= arr.length - 1; i++) { // a loop which works 5 times
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) { // the methods use only strict equal '==='
            continue
        } else {    
            return `❌ The array isn't unique.\n💥 The value '${arr[i]}' appears several times.`
        }
    }
    return `✅ The array is unique.`
}
console.log(isUnique(numsArr))

// ex17
const checkDataType = (arr) => {
    let firstItem = typeof(arr[0])
    for (let i = 0; i <= arr.length - 1; i++) {
        if (typeof(arr[i]) === firstItem) {
            continue
        } else {
            return `❌ This array hasn't similar data types.`
        }
    }
    return `✅ This array has similar data types → (${firstItem}).`
}
console.log(checkDataType(strArr))

// ex18
let validVarName = 'Firefly718'
let wrongVarName = '16ff'
let wrongVarName2 = '#hastagus'
let validVarName2 = '$16 000'
let testVarName = '🤖'

const isValidName = (string) => {
    let validStartName = /^[a-z$_]/i
    let findSpace = /\s/
    if (string.search(validStartName) === -1 || string.search(findSpace) !== -1) {
        return `❌ The variable name '${string}' isn't valid.`
    } else {
        return `✅ The variable name '${string}' is valid`
    }
}
console.log(isValidName(validVarName2))

// ex19
const sevenRanNums = () => {
    const nums = []
    while (nums.length <= 6) {
        let ranNum = Math.floor(Math.random() * 10)
        if (nums.includes(ranNum) === false) {
            nums.push(ranNum)
        }
    }
    return `🐱‍🚀 The seven random numbers: ${nums}`
}
console.log(sevenRanNums())

// ex20
const reverseCountries = (array) => {
    const copyArray = array
    const reversedArray = copyArray.reverse()
    return reversedArray
}
console.log(reverseCountries(countriesTwo))