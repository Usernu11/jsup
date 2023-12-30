const bodyEl = document.querySelector('body')

// creating elements
const headerEl = document.createElement('header')
const containerEl = document.createElement('div')
const buttonEl = document.createElement('button')

// appending elements
bodyEl.appendChild(containerEl)
containerEl.appendChild(headerEl)

// condition switchers
let correctInputValueName = false
let correctInputValueLastName = false
let correctInputValueEmail = false
let correctInputValuePass = false
let correctInputValuePhone = false
let correctInputValueBio = false

// creating form
for (let i = 0; i < 6; i++) {
    const valBlock = document.createElement('div')
    const valNameEl = document.createElement('div')
    const valInputEl = document.createElement('input')
    const valHintEl = document.createElement('div')

    containerEl.appendChild(valBlock)
    valBlock.appendChild(valNameEl)
    valBlock.appendChild(valInputEl)
    valBlock.appendChild(valHintEl)

    valBlock.classList.add('val-block')
    valNameEl.classList.add('val-block__name')
    valInputEl.classList.add('val-block__input')
    valHintEl.classList.add('val-block__hint')

    if (i === 0) {
        valNameEl.textContent = 'First Name'
        valInputEl.type = 'text'
        valHintEl.textContent = 'First name must be alphanumeric and contain 3 - 16 characters'

        valInputEl.addEventListener('input', key => {
            const inputValue = valInputEl.value
            const regexRule = /^.[a-z\d]{2,15}$/    // any alphanumeric character 3-16

            if (inputValue.match(regexRule)) {
                valHintEl.style.display = 'none',
                    valInputEl.style.borderColor = 'LimeGreen'
                correctInputValueName = true
            } else {
                valInputEl.style.borderColor = 'red',
                    valHintEl.style.display = 'block'
                correctInputValueName = false
            }
        })
    }

    if (i === 1) {
        valNameEl.textContent = 'Last Name'
        valInputEl.type = 'text'
        valHintEl.textContent = 'Last name must be alphanumeric and contain 3 - 16 characters'

        valInputEl.addEventListener('input', key => {
            const inputValue = valInputEl.value
            const regexRule = /^.[a-z\d]{2,15}$/    // any alphanumeric character 3-16

            if (inputValue.match(regexRule)) {
                valHintEl.style.display = 'none',
                    valInputEl.style.borderColor = 'LimeGreen'
                correctInputValueLastName = true
            } else {
                valInputEl.style.borderColor = 'red',
                    valHintEl.style.display = 'block'
                correctInputValueLastName = false
            }
        })
    }

    if (i === 2) {
        valNameEl.textContent = 'Email'
        valInputEl.type = 'email'
        valHintEl.textContent = 'Email name must be a valid adress, e.g. example@example.com'

        valInputEl.addEventListener('input', key => {
            const inputValue = valInputEl.value
            const regexRule = /^[^\s@]+@[^\s@]+\.(?:com)$/i    // example@example.com OR e@e.CoM

            if (inputValue.match(regexRule)) {
                valHintEl.style.display = 'none',
                    valInputEl.style.borderColor = 'LimeGreen'
                correctInputValueEmail = true
            } else {
                valInputEl.style.borderColor = 'red',
                    valHintEl.style.display = 'block'
                correctInputValueEmail = false
            }
        })
    }

    if (i === 3) {
        valNameEl.textContent = 'Password'
        valHintEl.textContent = 'Password must be alphanumeric (@,_ and - are also allowed) and between 6 - 20 characters'
        const currentValuePassword = []
        let maxPassLength = 0

        valInputEl.addEventListener('input', () => {
            let inputValue = valInputEl.value
            const regexRule = /^.[a-zA-Z\d@,_-]{5,19}$/    // any alphanumeric character 6-20 + [@ , _ -] symbols

            inputValue.split('').find(el => {       // find every symbol except * and add that symbol to array
                if (el !== '*' && inputValue.length > maxPassLength) {
                    currentValuePassword.push(el)
                    maxPassLength++
                }
            })

            if (inputValue.length < maxPassLength) {    // when we remove 1 symbol in input, that also removes from the password array
                currentValuePassword.pop()
                maxPassLength--
            }

            if (inputValue.length === 0) {      // when we marker all text and clear in one click, the password array also beeing clear 
                for (let i = 0; i < maxPassLength; i++) {
                    currentValuePassword.pop()
                }
                maxPassLength = 0
            }

            if (currentValuePassword.join('').match(regexRule)) {   // when our password array match to our regex rule - remove hint and make input border green
                valHintEl.style.display = 'none',
                    valInputEl.style.borderColor = 'LimeGreen'
                correctInputValuePass = true
            } else {        // in other case make input border color red and show the hint
                valInputEl.style.borderColor = 'red',
                    valHintEl.style.display = 'block'
                correctInputValuePass = false
            }

            valInputEl.value = inputValue.replace(/./g, '*')    // makes user password unvisible (only stars)
        })
    }

    if (i === 4) {
        valNameEl.textContent = 'Telephone'
        valHintEl.textContent = 'A valid Telephone number (11 digits and 333-333-3334)'
        // const regexRule = /^\d{3}-\d{3}-\d{4}$/      // more readable option
        const regexRule = /^(\d{3}-){2}\d{4}$/      // a little bit compact variation

        valInputEl.addEventListener('input', () => {
            // console.log(valInputEl.value)
            // console.log(valInputEl.value.match(regexRule))

            if (valInputEl.value.match(regexRule)) {   // when our telephone value match to our regex rule - remove hint and make input border green
                valHintEl.style.display = 'none',
                    valInputEl.style.borderColor = 'LimeGreen'
                correctInputValuePhone = true
            } else {        // in other case make input border color red and show the hint
                valInputEl.style.borderColor = 'red',
                    valHintEl.style.display = 'block'
                correctInputValuePhone = false
            }
        })
    }

    if (i === 5) {
        valNameEl.textContent = 'Your bio'
        valHintEl.textContent = 'Bio must containt only lowevase letters, underscores, hyphens and be 8 - 50 characters'

        valInputEl.addEventListener('input', () => {
            const regexRule = /^[a-z\s@_-]{8,50}$/

            if (valInputEl.value.match(regexRule)) {   // when our telephone value match to our regex rule - remove hint and make input border green
                valHintEl.style.display = 'none',
                    valInputEl.style.borderColor = 'LimeGreen'
                correctInputValueBio = true
            } else {        // in other case make input border color red and show the hint
                valInputEl.style.borderColor = 'red',
                    valHintEl.style.display = 'block'
                correctInputValueBio = false
            }
        })
    }
}

// submit button
document.addEventListener('input', () => {  // if all 6 input conditions are true (correct) - make submit button green
    if (correctInputValueName === true) {
        if (correctInputValueLastName === true) {
            if (correctInputValueEmail === true) {
                if (correctInputValuePass === true) {
                    if (correctInputValuePhone === true) {
                        if (correctInputValueBio === true) {
                            buttonEl.style.backgroundColor = 'LimeGreen'
                        } else {
                            buttonEl.style.backgroundColor = '#454545'
                        }
                    } else {
                        buttonEl.style.backgroundColor = '#454545'
                    }
                } else {
                    buttonEl.style.backgroundColor = '#454545'
                }
            } else {
                buttonEl.style.backgroundColor = '#454545'
            }
        } else {
            buttonEl.style.backgroundColor = '#454545'
        }
    } else {
        buttonEl.style.backgroundColor = '#454545'
    }
})

containerEl.appendChild(buttonEl)
// content
headerEl.textContent = 'Validating Web Forms'
buttonEl.textContent = 'Submit'

// classes
containerEl.classList.add('container')
headerEl.classList.add('title')
buttonEl.classList.add('button')