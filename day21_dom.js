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
spanYear.style.fontSize =  '70px'

setInterval(() => {     // change color for  <span> 2023 </span> every sec
    spanYear.style.color = `${getRandomColor()}`
}, 1000)

// 2nd point -> changing date, time and bg every sec
// creating block for time
const h2Tag = document.querySelector('h2')
const timeDateBlock = document.createElement('div')     // 2nd el
h2Tag.insertAdjacentElement('afterend', timeDateBlock)  // creating '2nd el' after '1th el'
timeDateBlock.style.background = `red`
timeDateBlock.style.width = `fit-content`
timeDateBlock.style.padding = `10px 20px`
timeDateBlock.style.borderRadius = `5px`

// start of time ↓
setInterval(() => {
    const time = new Date()
    const day = time.getDate()
    const yearDate = time.getFullYear()
    const getCurrentMonth = () => {
        switch (time.getMonth()) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
        }
    }
    const month = getCurrentMonth()
    const getCurrentTime = () => {
        let hours = time.getHours().toString().padStart(2, 0)
        let minutes = time.getMinutes().toString().padStart(2, 0)
        let second = time.getSeconds().toString().padStart(2, 0)

        switch(true) {
            case +hours >= 0 && +hours < 6:
                return `${hours}:${minutes}:${second} 🌛`
            case +hours >= 6 && +hours < 18:
                return `${hours}:${minutes}:${second} 🌞`
            case +hours >= 18:
                return `${hours}:${minutes}:${second} 👾`
            default:
                return `${hours}:${minutes}:${second}`
        }
    }
    const currentTime = getCurrentTime()

    timeDateBlock.innerHTML = `${month} ${day}, ${yearDate} ${currentTime}`
    timeDateBlock.style.background = `${getRandomColor()}`
}, 1000)

// 3,4,5 points -> change color for conditionlas (done, ongoing, coming)
// using loop get el
// if the last el = conditional -> change color for the el

// or -> using loop check all ul list and give to each el class
// and then give for classes styles

const liElements = document.querySelectorAll('li')
// for (let i = 0; i < liElements.length; i++) {    // 1th way
//     const condition = liElements[i].textContent.split(' ').reverse()[0]

//     liElements[i].style.width = '400px'
//     liElements[i].style.margin = '5px 0'
//     liElements[i].style.padding = '2px 10px'
//     liElements[i].style.borderRadius = '15px'

//     switch (condition) {
//         case 'Done':
//             liElements[i].style.background = 'darkseagreen'
//             break
//         case 'Ongoing':
//             liElements[i].style.background = 'gold'
//             break
//         case 'Coming':
//             liElements[i].style.background = 'salmon'
//             break
//     }
// }

const liStyles = {      // styles for li
    width: '400px',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '15px',
    listStyle: 'none'
}

liElements.forEach((li) => {    // optimizated 2nd way
    // const condition = li.textContent.match(/\w/g)        // ['3','D','a','y','s'...]
    // const condition = li.textContent.match(/\w+/g)      // ['30DaysOfJavaScript', 'Challenge', 'Done']
    // const condition = li.textContent.match(/\w+$/g)      // ['Done']
    const condition = li.textContent.match(/\w+$/g)[0]      // 'Done'
    // console.log(condition)
    Object.assign(li.style, liStyles)
    li.parentElement.style.padding = '0'        // removing padding from ul

    switch (condition) {
        case 'Done':
            li.style.background = 'darkseagreen'
            break
        case 'Ongoing':
            li.style.background = 'gold'
            break
        case 'Coming':
            li.style.background = 'salmon'
            break
    }
});

// beautify output 
const wrapper = document.querySelector(`.wrapper-list`)
wrapper.style.marginLeft = `35px`
wrapper.style.display = `flex`
wrapper.style.flexDirection = `column`
wrapper.style.alignItems = `center`
// wrapper.style.width = `60%`

// making a link to the course
const linkText = document.querySelector('h2').textContent   // 30DaysOfJavaScript Challenge
document.querySelector('h2').textContent = ''   // clear content inside h2
const linkTag = document.createElement('a')     // create a tag (link)
document.querySelector('h2').appendChild(linkTag)   // adding link tag into h2
linkTag.textContent = linkText  // paste our content to the link
linkTag.href = `https://github.com/Asabeneh/30-Days-Of-JavaScript/`     // making link clickable and worked
linkTag.target = '_blank'       // makinkg additional page when click to link

export { getRandomColor }