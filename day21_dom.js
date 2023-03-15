// Level 1
// ex1
const bodyAccess = document.querySelector('body')

for (let i = 0; i < 4; i++) {   // I used other way to solve the task, because I already had some important elements on my page.
    const newPTag = document.createElement('p')
    bodyAccess.appendChild(newPTag)
}

// ex2
const pTagList = document.querySelectorAll('p')     // get an array of P tags
console.log(pTagList)

for (let i = 0; i < pTagList.length; i++) {   // creating for each P-tag unique id
    pTagList[i].id = `id-${i + 1}`
}

for (let i = 0; i < pTagList.length; i++) {  // getting access for each P-tag
    console.log(document.querySelector(`#id-${i + 1}`))
}

// ex3
console.log(pTagList)

// ex4
for (let i = 0; i < pTagList.length; i++) {
    console.log(pTagList[i].textContent)
}

// ex5
pTagList[3].innerHTML = 'Fourth Paragraph'

// ex6
for (let i = 0; i < pTagList.length; i++) {     // using 'setAttribute'
    pTagList[i].setAttribute(`class`, `par-${i + 1}`)
    pTagList[i].setAttribute(`id`, `par-id-${i + 1}`)
}

for (let i = 0; i < pTagList.length; i++) {     // using 'normal Obj method'
    pTagList[i].className = `paragrapgh-${i + 1}`
    pTagList[i].id = `paragrapgh-id-${i + 1}`
}

// Level 2
// ex1
for (let i = 0; i < pTagList.length; i++) {     // for making more visible of result
    pTagList[i].innerHTML = `${i + 1} PARAGRAPH`
    pTagList[i].style.fontFamily = 'Cursive'
}

pTagList[0].style.color = 'yellow'
pTagList[1].style.background = 'lime'
pTagList[2].style.border = '2px dashed black'
pTagList[3].style.fontSize = '40px'

// ex2
for (let i = 0; i < pTagList.length; i++) {
    if (i % 2) {
        pTagList[i].style.color = 'red'
    } else {
        pTagList[i].style.color = 'green'
    }
}

// ex3
for (let i = 0; i < pTagList.length; i++) {
    let id = `id-p-${i + 1}`
    let className = `class-p-${i + 1}`
    let text = `Hi, I'm ${i + 1} paragraph. Here is the text for filling the paragraph and make it more visible. My id is: "${id}" and my class name is: "${className}"`
    pTagList[i].innerHTML = `${text}`
    pTagList[i].id = `${id}`
    pTagList[i].className = `${className}`
    pTagList[i].style.opacity = `0.1`       // made it 0.1 for more easily coding below
}

// Level 3
// ex1 (mini-project)
// 1th point -> changing every sec color for year in h1
let yearFullText = document.querySelector('h1')     // <h1> text 2023 </h1>
const yearTextArr = yearFullText.textContent.trim().split(' ')  // ['text', '2023']
const year = yearTextArr.pop()    // '2023'
const mainText = yearFullText.innerText.replace(year, '').trim()    // text

const getRandomColor = () => {      // color generator
    const b = Math.floor(Math.random() * 256)
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

yearFullText.innerHTML = `${mainText}<span> ${year}</span>`   // <h1> text <span> 2023 </span></h1>
let spanYear = document.querySelector('span')       // <span> 2023 </span>

setInterval(() => {     // change color for  <span> 2023 </span> every sec
    spanYear.style.color = `${getRandomColor()}`
}, 1000)

// 2nd point -> changing date, time and bg every sec
// time block creation


// time block
const h2Tag = document.querySelector('h2')
const timeDateBlock=  document.createElement('div')
h2Tag.insertAdjacentElement('afterend', timeDateBlock)
timeDateBlock.style.background = `red`
timeDateBlock.style.width = `fit-content`
timeDateBlock.style.padding = `10px 20px`
timeDateBlock.style.borderRadius = `5px`



setInterval(() => {
    const time = new Date()
    const day = time.getDate()
    const yearDate = time.getFullYear()
    const getCurrentMonth = () => {
        const monthNum = time.getMonth() + 1
        if (monthNum === 1) {
            return 'January'
        }
        if (monthNum === 2) {
            return 'February'
        }
        if (monthNum === 3) {
            return 'March'
        }
        if (monthNum === 4) {
            return 'April'
        }
        if (monthNum === 5) {
            return 'May'
        }
        if (monthNum === 6) {
            return 'June'
        }
        if (monthNum === 7) {
            return 'July'
        }
        if (monthNum === 8) {
            return 'August'
        }
        if (monthNum === 9) {
            return 'September'
        }
        if (monthNum === 10) {
            return 'October'
        }
        if (monthNum === 11) {
            return 'November'
        }
        if (monthNum === 12) {
            return 'December'
        }
    }
    const month = getCurrentMonth()
    const getCurrentTime = () => {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let second = time.getSeconds()
        if (hours.toString().length < 2) {
            hours = `0${hours}`
        }
        if (minutes.toString().length < 2) {
            minutes = `0${minutes}`
        }
        if (second.toString().length < 2) {
            second = `0${second}`
        }
        
        const oclock = `${hours}:${minutes}:${second}`
        
        return oclock
    }
    const currentTime = getCurrentTime()

    timeDateBlock.innerHTML = `${month} ${day}, ${yearDate} ${currentTime}`
    timeDateBlock.style.background = `${getRandomColor()}`
}, 1000)


