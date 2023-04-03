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
    // padding: '15px',
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

// replacing text for li
const challenges = ['Python', 'JavaScript', 'HTML & CSS', 'React', 'ReactNative', 'Fullstack', 'Data Analasis', 'Machine Learning']
const li = document.querySelectorAll('li')

const pyStack = ['Python', 'Flask', 'Numpy', 'Pandas', 'Statistics', 'API', 'MongoDB']
const jsStack = ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM']
const mlStack = ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'Scipy', 'Linear Algebra', 'Statistics', 'Vizualization']

for (let i = 0; i < li.length; i++) {   // '30 Days Of ...' 
  li[i].textContent = `30 Days Of ${challenges[i]}` // main text
  li[i].style.display = 'flex' // li
  li[i].style.justifyContent = 'space-between' // li

  const newLink = document.createElement('a') // main text

  const liText = li[i].textContent  // main text

  if (challenges[i] === 'Python') { // python li
    li[i].textContent = ''  // main text
    li[i].appendChild(newLink)  // link

    newLink.setAttribute('class', 'li-link-Python') // link
    const pyLink = document.querySelector('.li-link-Python') // link

    pyLink.textContent = liText // main text
    pyLink.href = 'https://github.com/Asabeneh/30-Days-Of-Python'  // link
    pyLink.style.textDecoration = 'underline' // link
  }

  // const statusText = document.createElement('p') // status
  //   statusText.textContent = 'Done' // status
  //   statusText.style.margin = '0' // status
  //   li[i].appendChild(statusText) // status

  if (challenges[i] === 'JavaScript') { // js li
    li[i].textContent = ''  // main text
    li[i].appendChild(newLink)  // link
    newLink.setAttribute('class', 'li-link-JavaScript') // link 
    const jsLink = document.querySelector('.li-link-JavaScript')  // link

    jsLink.textContent = liText // link
    jsLink.href = 'https://github.com/Asabeneh/30-Days-Of-JavaScript' // link
    jsLink.style.textDecoration = 'underline' // link
  }
}



// making dropdown list + fill out it -> details tag
for (let i = 0; i < li.length; i++) {   // dropdown list or details tag 
  const dropDownList = document.createElement('details')  // details
  const dropDownListName = document.createElement('summary') // details
  dropDownListName.style.marginBottom = '8px'
  const statusText = document.createElement('p') // status

  li[i].appendChild(dropDownList) // details
  dropDownList.appendChild(dropDownListName)  // details
  dropDownListName.textContent = `${challenges[i]}` // details

  if (dropDownListName.textContent === 'Python') {  // fulling p tag for details
    dropDownList.className = 'py-details'
    let det = document.querySelector('.py-details')

    for (let py = 0; py < pyStack.length; py++) {
      let newItem = document.createElement('p')
      det.appendChild(newItem)
      newItem.textContent = `${pyStack[py]}`
      newItem.style.margin = '0'
    }

    statusText.textContent = 'Done' // status
    statusText.style.margin = '0' // status
    li[i].appendChild(statusText) // status
  }

  if (dropDownListName.textContent === 'JavaScript') {  // fulling p tag for details
    dropDownList.className = 'js-details'
    let det = document.querySelector('.js-details')

    for (let js = 0; js < jsStack.length; js++) {
      let newItem = document.createElement('p')
      det.appendChild(newItem)
      newItem.textContent = `${jsStack[js]}`
      newItem.style.margin = '0'
    }

    statusText.textContent = 'Ongoing' // status
    statusText.style.margin = '0' // status
    li[i].appendChild(statusText) // status
  }

  if (dropDownListName.textContent === 'Machine Learning') {  // fulling p tag for details
    dropDownList.className = 'ml-details'

    let det = document.querySelector('.ml-details')

    for (let ml = 0; ml < mlStack.length; ml++) {
      let newItem = document.createElement('p')
      det.appendChild(newItem)
      newItem.textContent = `${mlStack[ml]}`
      newItem.style.margin = '0'
    }
  }

  if (dropDownListName.textContent !== 'Python' && dropDownListName.textContent !== 'JavaScript') { // for status
    statusText.textContent = 'Coming' // status
  }

  statusText.style.margin = '0' // status
  li[i].appendChild(statusText) // status

  document.querySelector('ul').style.width = '100%'
  li[i].style.width = '100%'
}

// maikng profile information
// educator name
const educator = document.createElement('h1')
educator.textContent = 'Asabeneh Yetayeh'
document.querySelector('.wrapper-list').appendChild(educator)
educator.style.marginBottom = '10px'

// social icons
const iconWrapper = document.createElement('div')
document.querySelector('.wrapper-list').appendChild(iconWrapper)
iconWrapper.style.width = '100%'
iconWrapper.style.height = 'auto'
iconWrapper.style.display = 'flex'
iconWrapper.style.justifyContent = 'center'

for (let i = 0; i < 3; i++) {
  let icon = document.createElement('a')
  icon.className = `icon-${i + 1}`
  iconWrapper.appendChild(icon)

  icon.style.display = 'block'
  icon.style.width = '30px'
  icon.style.height = '30px'
  icon.style.backgroundPosition = 'center'
  icon.style.backgroundSize = 'contain'
  icon.style.cursor = 'pointer'
  // icon.style.border = '2px solid black'
}

document.querySelector(`.icon-1`).style.backgroundImage = 'url("img/icons8-linkedin-50.png")'
document.querySelector(`.icon-2`).style.backgroundImage = 'url("img/icons8-twitter-squared-100.png")'
document.querySelector(`.icon-3`).style.backgroundImage = 'url("img/icons8-linkedin-50.png")'

// text about point
const textAboutEducator = `I am an educator, developer, motivator and content creator. I'm a life-long learner. If yoi like to know more about me checkout my LinkedIn or Github profile. Thank you so my for joining in my quest of chanining everyone to developer.`

const about = document.createElement('div')
document.querySelector('.wrapper-list').appendChild(about)
about.textContent = textAboutEducator
about.style.margin = '30px 0'
about.style.textAlign = 'center'

// some general fix
// console.log(document.querySelectorAll('.wrapper-list'))
document.querySelector('.wrapper-list').style.width = '50%'

// titles, skills, qualifications
const titlesArr = ['🌱 Educator', '💻 Programmer', '🌐 Developer', '🔥 Motivator', '📔 Content Creator']
const skillsArr = ['Web Development', 'Data Analysis', 'Data Visualization', 'Programming', 'Databases', 'Developing API']
const qualificationsArr = ['📖 MSc. Computer Science Ongoing', '👨‍🎓 BSc.Information and Communication Eng.', '👨‍🎓 MSc. Food Technology', '👨‍🎓 BSc. Food Technology']

// wrapper
const skillsWrapper = document.createElement('div')
document.querySelector('.wrapper-list').appendChild(skillsWrapper)
skillsWrapper.className = 'skill-wrapper'
skillsWrapper.style.display = 'flex'
skillsWrapper.style.justifyContent = 'space-between'
skillsWrapper.style.width = '130%'
skillsWrapper.style.height = 'auto'
// skillsWrapper.style.outline = '2px dashed yellow'

// ul (3)
for (let i = 0; i < 3; i++) {
  const aboutSkillsEl = document.createElement('ul')

  aboutSkillsEl.className = `ul-skills-${i + 1}`
  document.querySelector('.skill-wrapper').appendChild(aboutSkillsEl)

  aboutSkillsEl.style.width = 'fit-content'
  aboutSkillsEl.style.height = 'auto'
  // aboutSkillsEl.style.border = '2px solid black'
  aboutSkillsEl.style.padding = '0'
  aboutSkillsEl.style.margin = '0'
  aboutSkillsEl.style.listStyleType = 'none'  
  aboutSkillsEl.style.fontSize = '25px'  // the current font-family doesn't have any sizes, so it was decided solve the task using different font-sizes for ul and li
}

// us classes
const titlesList = document.querySelector('.ul-skills-1')
const skillsList = document.querySelector('.ul-skills-2')
const qualificationsList = document.querySelector('.ul-skills-3')

// ul titles
titlesList.textContent = 'Titles'
skillsList.textContent = 'Skills'
qualificationsList.textContent = 'Qualifications'

// ul filling li - 1
for (let i = 0; i < titlesArr.length; i++) {
  let liEl = document.createElement('li')
  liEl.textContent = titlesArr[i]
  titlesList.appendChild(liEl)
  liEl.style.fontSize = '16px'
}

// ul filling li - 2
for (let i = 0; i < skillsArr.length; i++) {
  let liEl = document.createElement('li')
  liEl.textContent = `✅ ${skillsArr[i]}`
  skillsList.appendChild(liEl)
  liEl.style.fontSize = '16px'
}

// ul filling li - 3
for (let i = 0; i < qualificationsArr.length; i++) {
  let liEl = document.createElement('li')
  liEl.textContent = qualificationsArr[i]
  qualificationsList.appendChild(liEl)
  liEl.style.fontSize = '16px'
}
