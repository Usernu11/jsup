const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
console.group('Level 1')
// Level 1
// ex1
console.warn('ex -> 1')
let skillsStr = JSON.stringify(skills, undefined, 4)
console.log(skillsStr)

// ex2
console.warn('ex -> 2')
let ageStr = JSON.stringify(age, undefined, 4)
console.log(ageStr)

// ex3
console.warn('ex -> 3')
let isMarriedStr = JSON.stringify(isMarried, undefined, 4)
console.log(isMarriedStr)

// ex4
console.warn('ex -> 4')
let studentJSON = JSON.stringify(student, undefined, 4)
console.log(studentJSON)


console.groupEnd('Level 1')
console.group('Level 2')
// Level 2
// ex1
console.warn('ex -> 1')
let studentJSON2 = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(studentJSON2)

console.groupEnd('Level 2')
console.group('Level 3')
// Level 3
// ex1
console.warn('ex -> 1')
let txtParsed = JSON.parse(txt)
console.table(txtParsed)

// ex2
console.warn('ex -> 2')
console.log(txtParsed)
const getSkilledPerson = (obj) => {
    const parrentEntries = Object.entries(obj)
    let maxSkills = 0
    let maxSkillsUser = null
    let skills = null
    for (let i = 0; i <= parrentEntries.length - 1; i++) {
        // console.log(parrentEntries[i][1].skills)
        if (parrentEntries[i][1].skills.length > maxSkills) {
            maxSkills = parrentEntries[i][1].skills.length
            maxSkillsUser = parrentEntries[i][0]
            skills = parrentEntries[i][1].skills.join(', ')
        }
    }
    return `👤 The most skilled user is: ${maxSkillsUser}\n✨ Count of skills: ${maxSkills}\n👾 Skills: ${skills}`
}
console.log(getSkilledPerson(txtParsed))
console.groupEnd('Level 3')


