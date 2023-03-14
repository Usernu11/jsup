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
    pTagList[i].id = `id-${i+1}`
}

for (let i = 0; i < pTagList.length; i++) {  // getting access for each P-tag
    console.log(document.querySelector(`#id-${i+1}`))
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
    pTagList[i].setAttribute(`class`, `par-${i+1}`)
    pTagList[i].setAttribute(`id`, `par-id-${i+1}`)
}

for (let i = 0; i < pTagList.length; i++) {     // using 'normal Obj method'
    pTagList[i].className = `paragrapgh-${i+1}`
    pTagList[i].id = `paragrapgh-id-${i+1}`
}

// Level 2
// ex1
for (let i = 0; i < pTagList.length; i++) {     // for making more visible of result
    pTagList[i].innerHTML = `${i+1} PARAGRAPH`
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
    let id = `id-p-${i+1}`
    let className = `class-p-${i+1}`
    let text = `Hi, I'm ${i+1} paragraph. Here is the text for filling the paragraph and make it more visible. My id is: "${id}" and my class name is: "${className}"`
    pTagList[i].innerHTML = `${text}`
    pTagList[i].id = `${id}`
    pTagList[i].className = `${className}`
    pTagList[i].style.opacity = `0.1`       // made it 0.1 for more easily coding below
}

// Level 3
// ex1 (mini-project)
let yearFullText = document.querySelector('h1')     // <h1> text 2023 </h1>
// let year = yearFullText.innerText.split(' ').reverse()[0]     // '2023'
const [, , , , year] = yearFullText.innerText.split(' ')    // '2023' -> another way
// let mainText = yearFullText.innerText.split(' ').slice(0, 4).toString().replace(/,/g, ' ')    // text
const mainText = yearFullText.innerText.replace(year, '').trim()    // text -> another way

// yearFullText.innerHTML = mainText       // <h1> text </h1>
// let yearTag = document.createElement('span')    // <span></span>
// yearFullText.appendChild(yearTag)   // <h1> text <span></span> </h1>
// let getYearTag = document.querySelector('span')     // <span></span>
// getYearTag.innerHTML = ` ${year}`   // <span> 2023</span>
// getYearTag.style.color = 'green'    // change color for <span> 2023</span>

// const getRandomHexaColor = () => {       // my old color generator
//     const hexaColor = []
//     for (let i = 0; i < 6; i++) {
//         let shortRandomNumber = Math.ceil(Math.random() * 3) // generate a random num 1-3
//         let randomNumberOfWords = Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 5) // generate a random num 97-103
//         let randomNumber = Math.ceil(Math.random() + 48) + Math.ceil(Math.random() * 8) // generate a random num 48-57
//         let randomAFWord = String.fromCharCode(randomNumberOfWords)  // return a word from A-F alphabet by id
//         let random09Number = String.fromCharCode(randomNumber) // return a number 0-9 by id
//         if (shortRandomNumber === 1) {
//             hexaColor.push(randomAFWord) // adding a random word from the A-F alphabet to the array
//         } else if (shortRandomNumber === 2) {
//             hexaColor.push(random09Number) // adding a random number 0-9 to the array
//         } else {
//             hexaColor.push(randomAFWord.toUpperCase()) // adding a random word with upper case from the A-F alphabet to the array
//         }
//     }
//     return `#${hexaColor.toString().replace(/,/g, '')}`
// }

const getRandomColor = () => {      // the new color generator
    const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

yearFullText.innerHTML = `${mainText}<span> ${year}</span>`   // another way in 1 line instead 6 above
let spanYear = document.querySelector('span')

setInterval(() => {
    spanYear.style.color = `${getRandomColor()}`
}, 1000)
