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
document.querySelector('.wrapper').remove()   // clean previous ex

const countriesAPI = 'https://restcountries.com/v2/all'   // countries data

// preparing header elements
const h1 = document.createElement('h1')
const h4 = document.createElement('h4')
const span = document.createElement('span')
const link = document.createElement('a')
const div = document.createElement('div')

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
link.textContent = `Student: Bohdan Lavrentiev`

// setting up styles for elements
const applyStyles = (element, styles) => Object.assign(element.style, styles)
applyStyles(h1, elementStyles.h1)
applyStyles(h4, elementStyles.h4)
applyStyles(link, elementStyles.link)
applyStyles(body, elementStyles.body)

// setting up attr & styles -> link
link.href = 'https://github.com/Usernu11'

// joining elements
body.appendChild(h1)
body.appendChild(h4)
body.appendChild(span)
body.appendChild(link)
body.appendChild(div)

// calling countries data
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    
    let i = 0;
    const interval = setInterval(() => {  // for displaing each country after 50 mls
      if (i >= data.length) {   // breaks for interval machine
        clearInterval(interval)
        return
      }
      h4.textContent = `Total Number of countries: ${i+1}`  // added new feature

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