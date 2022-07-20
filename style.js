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

const rgbColor = []
for (let i = 0; i <= 2; i++) {
    let randomNumber = Math.round(Math.random() * 255) // generate a ranodm number 0-255
    rgbColor.push(randomNumber) // adding a random number to the array
}

const rgbAdditional = []
for (let i = 0; i <= 2; i++) {
    let randomNumber = Math.round(Math.random() * 255) // generate a ranodm number 0-255
    rgbAdditional.push(randomNumber) // adding a random number to the array
}

document.getElementById('img').style.width = "100%"
document.getElementById('img').style.height = "100vh"
document.getElementById('body').style.margin = "inherit"
document.getElementById('body').style.overflow = 'hidden'
document.getElementById('body').style.background = `linear-gradient(90deg, 
#${hexidemicalNumber.toString().replace(/,/g, '')},
rgb(${rgbColor.toString()})` // using the results of (hexidemical color + rbg color) above for randomly changing background-color of main element 'body' 😍
// rgb(${rgbAdditional.toString()}))
