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
input.style.border = '2px solid green'
input.style.width = '400px'
input.style.height = '30px'
input.style.padding = '10px'
input.style.margin = '10px'

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

const numGen = (count) => {
    const numsWrapper = document.createElement('div')
    numsWrapper.className = 'numbers-wrapper'
    // numsWrapper.style.outline = '2px dashed black'
    numsWrapper.style.display = 'flex'
    numsWrapper.style.flexWrap = 'wrap'
    numsWrapper.style.width = '50%'
    wrapper.appendChild(numsWrapper)

    for (let i = 0; i < +count + 1; i++) {
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

        numsWrapper.appendChild(newNumEl)
    }
}

button.addEventListener('click', () => {
    const warnMess = document.createElement('div')
    const getNumWrapper = document.querySelector('.numbers-wrapper')

    if (+input.value === '' || typeof +input.value === 'string') {
        input.insertAdjacentElement('beforebegin', warnMess)
        warnMess.style.color = 'red'
        warnMess.style.fontSize = '18px'
        warnMess.style.marginLeft = '10px'
        warnMess.textContent = 'Enter NUMBER value please 👾'
    } else {
        const newNumWrapper = document.createElement('div')
        newNumWrapper.className = 'numbers-wrapper'
        newNumWrapper.style.display = 'flex'
        newNumWrapper.style.flexWrap = 'wrap'
        newNumWrapper.style.width = '50%'

        for (let i = 0; i < +input.value + 1; i++) {
            const newNumEl = document.createElement('div')
            newNumEl.textContent = `${i}`
            newNumEl.style.width = '80px'
            newNumEl.style.height = '60px'
            newNumEl.style.margin = '5px'
            newNumEl.style.display = 'flex'
            newNumEl.style.alignItems = 'center'
            newNumEl.style.justifyContent = 'center'
            newNumEl.style.fontSize = '40px'

            if (i % 2) {
                newNumEl.style.background = 'gold'
            } else {
                newNumEl.style.background = 'darkseagreen'
            }

            if (isPrime(i)) {
                newNumEl.style.background = 'salmon'
            }

            newNumWrapper.appendChild(newNumEl)
        }

        if (getNumWrapper) {
            wrapper.replaceChild(newNumWrapper, getNumWrapper)
        } else {
            wrapper.appendChild(newNumWrapper)
        }
    }
})



// доп функц submit при помощи кнопки энтер
// до функц при ген цифр сделать создание элементов одним за другим видимым очень быстро, но не мгновенно


// bugs
// 1. при пустом поле или строке нажатие на кнопку создаёт доп элемент постоянно ✅
// 2. при введении числа предупреждение всё равно выводится на экран ✅
// 3. при новом значении нужно убирать старые результаты (убрать дублирование и добавление элементов на стр при постоянном нажатии на кнопку) ✅
// 4. после генерации чисел кнопка не реаг на пустое поле
// 5. кнопка реаг на 0 и вызывает функц ген чисел


// ex2