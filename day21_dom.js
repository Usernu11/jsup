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
}

// Level 3
// ex1 (mini-project)