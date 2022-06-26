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

