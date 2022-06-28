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

document.getElementById('randomHexNumber').style.backgroundColor = `${genRandomHexNumber()}` // paint an el in HTML in a random hexa color
document.getElementById('randomHexNumber').innerHTML += `${genRandomHexNumber()}` // add text to an el - what is current hex color
console.log(`🎨 The new random hexademical number is:\n${genRandomHexNumber()}`)

console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()