// Level 1
// ex1
// Preparin HTML
const parrentBlock = document.createElement('div')
const h1Title = document.createElement('h1')
const h2Title = document.createElement('h2')
const h3Title = document.createElement('h3')
const inputWrapper = document.createElement('div')
const inputEl = document.createElement('input')
const buttonEl = document.createElement('button')

parrentBlock.className = 'wrapper'
h1Title.className = 'title'
h2Title.className = 'subtitle'
h3Title.className = 'author'
inputWrapper.className = 'input-wrapper'
inputEl.type = 'text'
inputEl.placeholder = 'Generate more numbers...'
buttonEl.className = 'submit'

h1Title.textContent = 'Number Generator'
h2Title.textContent = '30DaysOfJavaScript'
h3Title.textContent = 'Bohdan Lavrentiev'
buttonEl.textContent = 'Generate numbers'

document.body.appendChild(parrentBlock)
const wrapper = document.querySelector('.wrapper')
// wrapper.style.outline = '2px dashed black'
wrapper.style.width = '100%'
wrapper.style.margin = '0 auto'
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'
wrapper.style.marginBottom = '100px'

wrapper.appendChild(h1Title)
wrapper.appendChild(h2Title)
wrapper.appendChild(h3Title)
wrapper.appendChild(inputWrapper)
inputWrapper.appendChild(inputEl)
inputWrapper.appendChild(buttonEl)

document.querySelector('.title').style.margin = '5px'
document.querySelector('.title').style.color = 'green'
document.querySelector('.subtitle').style.margin = '5px'
document.querySelector('.author').style.margin = '5px 0 40px 0'
// document.querySelector('.imput-wrapper').style.width = '200%'

const input = document.querySelector('input')
input.style.border = '3px solid green'
input.style.width = '400px'
input.style.height = '30px'
input.style.padding = '10px'
input.style.margin = '10px'
input.style.outline = 'none'

const button = document.querySelector('button')
button.style.height = '52px'
button.style.backgroundColor = 'green'
button.style.color = 'white'
button.style.border = 'none'
button.style.padding = '15px'
button.style.cursor = 'pointer'

const isPrime = num => {        // a function for checking prime numbers
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false
    }
    return num > 1
}
let getNumWrapper = document.querySelector('.numbers-wrapper')
let newNumWrapper = document.createElement('div')

const numGen = (count) => {
    const numsWrapper = document.createElement('div')
    let warn = document.querySelector('.warn-message')
    numsWrapper.className = 'numbers-wrapper'
    // numsWrapper.style.outline = '2px dashed black'
    numsWrapper.style.display = 'flex'
    numsWrapper.style.flexWrap = 'wrap'
    numsWrapper.style.width = '50%'
    wrapper.appendChild(numsWrapper)

    let i = 0
    const smoothCount = setInterval(() => {
        if (i >= count + 1) {   // breaks for interval machine
            clearInterval(smoothCount)
            return
        }

        const newNumEl = document.createElement('div')
        newNumEl.textContent = `${i}`
        newNumEl.style.width = '80px'
        newNumEl.style.height = '60px'
        // newNumEl.style.outline = '2px dashed black'
        newNumEl.style.margin = '5px'
        newNumEl.style.display = 'flex'
        newNumEl.style.alignItems = 'center'
        newNumEl.style.justifyContent = 'center'
        newNumEl.style.fontSize = '40px'

        if (i % 2) {    // for odd nums
            newNumEl.style.background = 'gold'
        } else {
            newNumEl.style.background = 'darkseagreen'
        }

        if (isPrime(i)) {   // check if the number is prime
            newNumEl.style.background = 'salmon'
        }

        if (getNumWrapper) {
            wrapper.replaceChild(newNumWrapper, getNumWrapper)
        } else {
            wrapper.appendChild(newNumWrapper)
        }

        if (warn) {
            warn.remove()
        }

        numsWrapper.appendChild(newNumEl)

        i++
    }, 20)
}

button.addEventListener('click', () => {
    const warnMess = document.createElement('div')
    let getNumWrapper = document.querySelector('.numbers-wrapper')
    let newNumWrapper = document.createElement('div')
    warnMess.className = 'warn-message'
    let warn = document.querySelector('.warn-message')
    const inputNumValue = +input.value

    if (inputNumValue === '' || typeof inputNumValue === 'string' || inputNumValue === 0) {
        input.insertAdjacentElement('beforebegin', warnMess)
        warnMess.style.color = 'red'
        warnMess.style.fontSize = '18px'
        warnMess.style.marginLeft = '10px'
        warnMess.textContent = 'Enter positive NUMBER value please 👾'

        if (getNumWrapper) {
            wrapper.replaceChild(newNumWrapper, getNumWrapper)
        } else {
            wrapper.appendChild(newNumWrapper)
        }

        if (warn) {
            input.replaceChildren(warn, warn)
        }
    }

    if (typeof inputNumValue === 'number' && inputNumValue !== 0) {
        numGen(inputNumValue)

        if (getNumWrapper) {
            wrapper.replaceChild(newNumWrapper, getNumWrapper)
        } else {
            wrapper.appendChild(newNumWrapper)
        }
    }
})

document.body.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        button.click()
    }
})

// ex2
// Preparing HTML
const kpParrentEl = document.createElement('div')
const textBlock = document.createElement('div')
kpParrentEl.className = 'keypress-wrapper'
textBlock.className = 'text'
textBlock.textContent = 'Press any keyboard key'

document.body.appendChild(kpParrentEl)
kpParrentEl.appendChild(textBlock)

const kpWrapper = document.querySelector('.keypress-wrapper')
// kpWrapper.style.outline = '2px dashed black'
kpWrapper.style.display = 'flex'
kpWrapper.style.justifyContent = 'center'
kpWrapper.style.flexDirection = 'column'
kpWrapper.style.alignItems = 'center'
kpWrapper.style.fontSize = '40px'

const text = document.querySelector('.text')
// text.style.outline = '2px solid yellow'
text.style.padding = '20px'
text.style.boxShadow = '3px 3px 11px 3px black'
text.style.textShadow = '1px 1px 0px whitesmoke'
text.style.backgroundColor = 'tan'
text.style.width = '30%'
text.style.textAlign = 'center'

const key = document.createElement('div')
kpWrapper.appendChild(key)
key.textContent = ''
key.style.width = '180px'
key.style.height = '180px'
key.style.marginTop = '30px'
key.style.color = 'green'
key.style.textShadow = '2px 2px 0px black'
key.style.fontSize = '100px'
// key.style.outline = '2px solid black'
key.style.display = 'flex'
key.style.alignItems = 'center'
key.style.justifyContent = 'center'
key.style.backgroundColor = 'wheat'
key.style.borderRadius = '15px'
key.style.boxShadow = '0px 0px 7px 2px #000000'

const eventText = document.createElement('span')
text.appendChild(eventText)

document.body.addEventListener('keypress', e => {
    const span = document.querySelector('span')
    key.textContent = e.keyCode
    eventText.textContent = `${e.key}`
    text.textContent = `You pressed `
    text.appendChild(eventText)
    eventText.style.color = 'green'
    eventText.style.textTransform = 'Capitalize'
    eventText.style.textShadow = '2px 2px 0px black'

    if (e.keyCode === 32) {
        eventText.textContent = 'Space'
    }
})