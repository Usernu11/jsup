// Level 1
// ex1
const wrapper = document.querySelector('.wrapper')
// wrapper.style.outline = '2px dashed black'
wrapper.style.width = '100%'
wrapper.style.margin = '0 auto'
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'

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
    // wrapper.removeChild(document.querySelector('.warn-message'))

let i = 0
const smoothCount = setInterval(() => {
        if (i >= count+1) {   // breaks for interval machine
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

// доп функц submit при помощи кнопки энтер ✅
// до функц при ген цифр сделать создание элементов одним за другим видимым очень быстро, но не мгновенно ✅

// ex2