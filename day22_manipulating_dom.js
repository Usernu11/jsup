// Level 1
// ex1
const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
const body = document.querySelector('body')
body.appendChild(wrapper)

const styles = {
  wrapper: {
    width: '100%',
    background: 'khaki',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '10px',
    padding: '15px',
  },
  numItem: {
    width: '100px',
    height: '30px',
    border: '2px dashed black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

Object.assign(wrapper.style, styles.wrapper) // applying styles for wrapper

const isPrime = num => {        // a function for checking prime numbers
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}

for (let i = 0; i <= 100; i++) {
  let numItem = document.createElement('div')
  numItem.className = 'num-item'
  numItem.id = `item-${i}`
  numItem.textContent = `num ${i}`

  Object.assign(numItem.style, styles.numItem) // applying styles for num items

  if (i % 2) {    // for odd nums
    numItem.style.background = 'gold'
  } else {
    numItem.style.background = 'darkseagreen'
  }

  if (isPrime(i)) {   // check if the number is prime
    numItem.style.background = 'salmon'
  }

  wrapper.appendChild(numItem) // append child to wrapper
}

// Level 2
// ex1
// document.querySelector('.wrapper').remove()   // clean previous ex

const countriesAPI = 'https://restcountries.com/v2/all'   // countries data

// preparing header elements
const h1 = document.createElement('h1')
const h4 = document.createElement('h4')
const span = document.createElement('span')
const newLink = document.createElement('a')
const div = document.createElement('div')

// adding classes for managing
h1.className = 'h1-day22'
h4.className = 'h4-day22'
span.className = 'span-day22'
newLink.className = 'link-day22'
div.className = 'div-day22'

const elementStyles = {
  h1: {
    textTransform: 'uppercase',
    letterSpacing: '8px',
    fontSize: '50px',
    margin: '0'
  },
  h4: {
    fontSize: '30px',
    margin: '0'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh'
  },
  newCountrySquare: {
    width: '100px',
    height: '100px',
    border: '1px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
    justifyContent: 'center'
  }
}

// filling context
h1.textContent = 'world countries list'
span.textContent = `30DaysOfJavaScript: DOM-Day-2`
h4.textContent = `Total Number of countries: ...`
newLink.textContent = `Student: Bohdan Lavrentiev`

// setting up styles for elements
const applyStyles = (element, styles) => Object.assign(element.style, styles)
applyStyles(h1, elementStyles.h1)
applyStyles(h4, elementStyles.h4)
applyStyles(newLink, elementStyles.link)
applyStyles(body, elementStyles.body)

// setting up attr & styles -> link
newLink.href = 'https://github.com/Usernu11'

// joining elements
body.appendChild(h1)
body.appendChild(h4)
body.appendChild(span)
body.appendChild(newLink)
body.appendChild(div)

// calling countries data
fetch(countriesAPI) // <- put hier 'countriesAPI'
  .then(response => response.json())
  .then(data => {
    // console.log(data)

    let i = 0;
    const interval = setInterval(() => {  // for displaing each country after 50 mls
      if (i >= data.length) {   // breaks for interval machine
        clearInterval(interval)
        return
      }
      h4.textContent = `Total Number of countries: ${i + 1}`  // added new feature

      const country = data[i]
      const newCountrySquare = document.createElement('div')
      applyStyles(newCountrySquare, elementStyles.newCountrySquare)
      applyStyles(div, elementStyles.div)

      div.appendChild(newCountrySquare)
      newCountrySquare.textContent = `${country.name}`

      i++
    }, 50)
  })

// Level 3
// ex1
// Prepare workplace for next ex
// document.querySelector('.h1-day22').remove()
// document.querySelector('.h4-day22').remove()
// document.querySelector('.span-day22').remove()
// document.querySelector('.link-day22').remove()

// replacing text for li
const challenges = ['Python', 'JavaScript', 'HTML & CSS', 'React', 'ReactNative', 'Fullstack', 'Data Analasis', 'Machine Learning']
const list = document.querySelectorAll('li')

const pyStack = ['Python', 'Flask', 'Numpy', 'Pandas', 'Statistics', 'API', 'MongoDB']
const jsStack = ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM']
const mlStack = ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'Scipy', 'Linear Algebra', 'Statistics', 'Vizualization']

for (let i = 0; i < list.length; i++) {   // '30 Days Of ...' 
  list[i].textContent = `30 Days Of ${challenges[i]}` // main text
  list[i].style.display = 'flex' // li
  list[i].style.justifyContent = 'space-between' // li

  const newLink = document.createElement('a') // main text

  const liText = list[i].textContent  // main text

  if (challenges[i] === 'Python') { // python li
    list[i].textContent = ''  // main text
    list[i].appendChild(newLink)  // link

    newLink.setAttribute('class', 'li-link-Python') // link
    const pyLink = document.querySelector('.li-link-Python') // link

    pyLink.textContent = liText // main text
    pyLink.href = 'https://github.com/Asabeneh/30-Days-Of-Python'  // link
    pyLink.style.textDecoration = 'underline' // link
  }

  if (challenges[i] === 'JavaScript') { // js li
    list[i].textContent = ''  // main text
    list[i].appendChild(newLink)  // link
    newLink.setAttribute('class', 'li-link-JavaScript') // link 
    const jsLink = document.querySelector('.li-link-JavaScript')  // link

    jsLink.textContent = liText // link
    jsLink.href = 'https://github.com/Asabeneh/30-Days-Of-JavaScript' // link
    jsLink.style.textDecoration = 'underline' // link
  }
}

const fillStack = (name) => {
  const dropDownList = document.createElement('details')  // details

  if (name === 'Python') {
    for (let i = 0; i < pyStack.length; i++) {
      const dropDownListItem = document.createElement('p') // details
      dropDownList.appendChild(dropDownListItem)
      newItem.className = `item-py-${i}`  // details
      newItem.textContent = pyStack[i]
      // document.querySelector(`.item-py-${i}`).textContent = pyStack[i] // use newItem variable here
      dropDownListItem.style.margin = '2px 0'
    }
  }

  if (name === 'JavaScript') {
    for (let i = 0; i < jsStack.length; i++) {
      const dropDownList = document.createElement('details')  // details

      const dropDownListItem = document.createElement('p') // details
      const newItem = dropDownList.appendChild(dropDownListItem)
      newItem.className = `item-js-${i}`  // details
      newItem.textContent = pyStack[i]

      // document.querySelector(`.item-js-${i}`).textContent = jsStack[i] // use newItem variable here
      dropDownListItem.style.margin = '2px 0'
    }
  }

  if (name === 'Machine Learning') {
    for (let i = 0; i < mlStack.length; i++) {
      const dropDownList = document.createElement('details')  // details

      const dropDownListItem = document.createElement('p') // details
      const newItem = dropDownList.appendChild(dropDownListItem)
      newItem.className = `item-ml-${i}`  // details
      newItem.textContent = pyStack[i]

      // document.querySelector(`.item-ml-${i}`).textContent = mlStack[i] // use newItem variable here
      dropDownListItem.style.margin = '2px 0'
    }
  }
}


for (let i = 0; i < list.length; i++) {   // dropdown list or details tag 
  const dropDownList = document.createElement('details')  // details
  const dropDownListName = document.createElement('summary') // details
  dropDownListName.style.marginBottom = '8px'

  list[i].appendChild(dropDownList) // details
  dropDownList.appendChild(dropDownListName)  // details
  dropDownListName.textContent = `${challenges[i]}` // details

  if (dropDownListName.textContent === 'Python') {  // fulling p tag for details
    fillStack(dropDownListName.textContent)
    // console.log(dropDownListName.textContent)
  }

  if (dropDownListName.textContent === 'JavaScript') {  // fulling p tag for details
    fillStack(dropDownListName.textContent)
    // console.log(dropDownListName.textContent)
  }

  if (dropDownListName.textContent === 'Machine Learning') {  // fulling p tag for details
    fillStack(dropDownListName.textContent)
    // console.log(dropDownListName.textContent)
  }
}