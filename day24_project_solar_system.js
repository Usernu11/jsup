// creating HTML elements
const spaceBg = document.createElement('div')
const contentWrapper = document.createElement('div')
const titleEl = document.createElement('h1')
const calcPannel = document.createElement('div')
const input = document.createElement('input')
const select = document.createElement('select')
const button = document.createElement('button')
const resultWrapper = document.createElement('div')
const planetInfo = document.createElement('div')

// planet consts
const mercury = 3.7
const venus = 8.87
const earth = 9.8
const mars = 3.7
const jupiter = 24.8
const saturn = 10.4
const uranus = 8.87
const neptune = 10.15

// appending HTML elements
document.body.appendChild(spaceBg)
document.body.appendChild(contentWrapper)
contentWrapper.appendChild(titleEl)
contentWrapper.appendChild(calcPannel)
calcPannel.appendChild(input)
calcPannel.appendChild(select)
calcPannel.appendChild(button)
contentWrapper.appendChild(resultWrapper)
resultWrapper.appendChild(planetInfo)

// applying styles and filling content
spaceBg.style.backgroundImage = `url('img/space.jpg')`
spaceBg.style.backgroundSize = '100%'
spaceBg.style.width = '100%'
spaceBg.style.height = '100vh'
spaceBg.style.position = 'fixed'
spaceBg.style.zIndex = '-1'

body.style.margin = '0'

// contentWrapper.style.outline = '2px dashed yellow'
contentWrapper.style.width = '60%'
contentWrapper.style.margin = '0 auto'
contentWrapper.style.display = 'flex'
contentWrapper.style.flexDirection = 'column'
// contentWrapper.style.justifyContent = 'center'
contentWrapper.style.alignItems = 'center'

titleEl.textContent = 'Calculate weight of an object on a planet'
titleEl.style.color = 'white'
titleEl.style.textShadow = '2px 2px 0px blue'
titleEl.style.fontSize = '50px'
// titleEl.style.outline = '2px solid yellow'
titleEl.style.textAlign = 'center'
titleEl.style.margin = '0'
titleEl.style.padding = '40px 0'

calcPannel.style.margin = '100px 0 25px 0'
// calcPannel.style.outline = '2px solid blue'
calcPannel.style.width = '60%'
calcPannel.style.display = 'flex'
calcPannel.style.justifyContent = 'space-between'

input.style.height = '30px'
input.placeholder = 'Mass in Kilogram'
input.style.padding = '0 10px'
input.style.outline = 'none'
input.style.borderRadius = '5px'
input.style.border = 'none'

select.style.height = '30px'
select.style.outline = 'none'
select.style.width = '180px'
select.style.borderRadius = '5px'
select.style.padding = '5px'
select.style.color = 'gray'
select.style.border = 'none'

// filling select of options
for (let i = 0; i < 9; i++) {
    const newOption = document.createElement('option')
    select.appendChild(newOption)
    switch (i) {
        case 0: newOption.textContent = '- - select planet - - 🌏'
            break

        case 1: newOption.textContent = 'Mercury'
            break

        case 2: newOption.textContent = 'Venus'
            break

        case 3: newOption.textContent = 'Earth'
            break

        case 4: newOption.textContent = 'Mars'
            break

        case 5: newOption.textContent = 'Juputer'
            break

        case 6: newOption.textContent = 'Saturn'
            break

        case 7: newOption.textContent = 'Uranus'
            break

        case 8: newOption.textContent = 'Neptune'
            break
    }
}

button.textContent = 'Calculate weight'
button.style.padding = '0 10px'
button.style.height = '30px'
button.style.cursor = 'pointer'
button.style.borderRadius = '5px'
button.style.backgroundColor = 'rgba(180 , 180, 180 , .5)'
button.style.color = 'white'
button.style.border = 'none'

// resultWrapper.style.outline = '2px dashed blue'
resultWrapper.style.width = '100%'
resultWrapper.style.height = '200px'
resultWrapper.style.backgroundColor = 'rgba(120 , 120, 120 , .3)'
resultWrapper.style.display = 'flex'
resultWrapper.style.flexDirection = 'column'
resultWrapper.style.justifyContent = 'center'
resultWrapper.style.alignItems = 'center'

planetInfo.textContent = 'Mass is required'
planetInfo.style.color = 'white'
// planetInfo.style.outline = '2px solid red'
planetInfo.style.width = '50%'
planetInfo.style.height = '100px'
planetInfo.style.textAlign = 'center'
planetInfo.style.fontSize = '30px'
planetInfo.style.display = 'flex'
planetInfo.style.flexDirection = 'column'
planetInfo.style.justifyContent = 'center'
planetInfo.style.alignItems = 'center'
planetInfo.style.backgroundColor = 'rgba(120 , 120, 120 , .5)'

const getSelect = document.querySelector('select')
let getInputValue = input.value

let getOptionValue = getSelect.value

getSelect.addEventListener('change', e => {
    getOptionValue = e.target.value
})

input.addEventListener('input', e => {
    if (getOptionValue === '- - select planet - - 🌏') {
        planetInfo.textContent = 'Planet is required 🌏'
    }
    if (input.value === '') {
        planetInfo.textContent = 'Mass is required'
    }
    getInputValue = input.value
})

button.addEventListener('click', () => {
    const weightInfoEl = document.createElement('div')
    weightInfoEl.style.width = '120px'
    weightInfoEl.style.height = '120px'
    weightInfoEl.style.borderRadius = '50%'
    weightInfoEl.style.backgroundColor = 'rgba(180 , 180, 180 , .6)'
    weightInfoEl.style.fontSize = '35px'
    weightInfoEl.style.color = 'white'
    weightInfoEl.style.display = 'flex'
    weightInfoEl.style.justifyContent = 'center'
    weightInfoEl.style.alignItems = 'center'
    weightInfoEl.style.margin = '10px'
    weightInfoEl.style.textShadow = '1px 1px 0 white'
    // weightInfoEl.textContent = ''

    switch (getOptionValue) {
        case '- - select planet - - 🌏':
            planetInfo.textContent = 'Planet is required 🌏'
            planetInfo.style.boxShadow = 'inset 0 0 10px 1px red'
            break

        case 'Mercury':
            planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
            weightInfoEl.textContent = `${(getInputValue * mercury).toFixed(2)} N`
            planetInfo.style.height = 'auto'
            planetInfo.style.padding = '10px'
            planetInfo.appendChild(weightInfoEl)
            resultWrapper.style.height = '300px'
            break
    }
})

// add features
// 1. gifs for bg
// 2. box-shadow for focudes input, select, button
// 3. allow input apply words like 'ten' and convert then to numbers (maybe not all words, short)
// 4. add mark to textContent in option which selected