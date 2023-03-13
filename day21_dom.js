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
    pTagList[i].id = `id-${i}`
}

for (let i = 0; i < pTagList.length; i++) {  // getting access for each P-tag
    console.log(document.querySelector(`#id-${i}`))
}

// ex3
console.log(pTagList)

// ex4
// ex5
// ex6

// Level 2
// ex1
// ex2
// ex3

// Level 3
// ex1 (mini-project)