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

button.addEventListener('click', () => {
    const warnMess = document.createElement('div')
    if (input.value === '') {
        input.insertAdjacentElement('beforebegin', warnMess)
        warnMess.style.color = 'red'
        warnMess.style.fontSize = '18px'
        warnMess.style.marginLeft = '10px'
        warnMess.textContent = 'Enter number value in the number generation field please 👾'
    }


})
// ex2