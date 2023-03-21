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

// filling context
h1.textContent = 'world countries list'
span.textContent = `30DaysOfJavaScript: DOM-Day-2`
h4.textContent = `Total Number of countries: ...`
link.textContent = `Student: Bohdan Lavrentiev`

// setting up styles -> h1
h1.style.textTransform = 'uppercase'
h1.style.letterSpacing = '8px'
h1.style.fontSize = '50px'
h1.style.margin = '0'

// setting up styles -> h4
h4.style.fontSize = '30px'
h4.style.margin = '0'

// setting up styles -> body
body.style.display = 'flex'
// body.style.justifyContent = 'center'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
body.style.height = '100vh'

// setting up attr & styles -> link
link.href = 'https://github.com/Usernu11'
link.style.textDecoration = 'none'
link.style.color = 'inherit'

// setting up styles for div (wrapper for country elements)

// joining elements
body.appendChild(h1)
h1.insertAdjacentElement('afterend', h4)
h4.insertAdjacentElement('afterend', span)
span.insertAdjacentElement('afterend', link)
link.insertAdjacentElement('afterend', div)

// calling countries data
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let arrLength = new Array(...data).length
    h4.textContent = `Total Number of countries: ${arrLength}`
  })


// Level 3
// ex1