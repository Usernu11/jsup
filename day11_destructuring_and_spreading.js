// level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// ex1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// ex2
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

// ex3
const {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

// Level 2
// ex1
for (const {name, scores, skills, age} of users) {
    console.log(`Name: ${name}\nScores: ${scores}\nSkills: ${skills}\nAge: ${age}`)
}

// ex2
for (const {name, scores, skills, age} of users) {
    if (skills.length < 2) {
        console.log(`👤 The one-skilled person: ${name}`)
        console.log(`👾 His skill: ${skills}`)
        console.log(`🍀 He has: ${scores} scores;`)
        console.log(`🐲 His age is: ${age} y.o.`)
    }
}

// level3
// ex1
import { countriesObjects } from "./countries.js" 

for (const {name, capital, population, languages} of countriesObjects) {
    console.log(`🆎 Country name: ${name}\n💠 Country capital: ${capital}\n👥 Country population: ${population}\n🌐 Country languages: ${languages}`)
}

// ex2
console.log('')
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, Scores] = student
console.log(`🆎 Name: ${name}\n🔧 Skills: ${skills}\n✨ JS score: ${Scores[2]}\n🔮 React Score: ${Scores[3]}`)

// ex3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (arr) => {
    const objects = []
    for (const [name, skills, scores] of arr) {
        objects.push({
            name: name,
            skills: skills,
            scores: scores
        })
    }

    return objects
}
console.log(convertArrayToObject(students))

// ex4
const newStudentObj = convertArrayToObject(students)
const copyStudentObj = {...newStudentObj}
console.log(copyStudentObj)

let {studentName, studentSkills, studetScores} = copyStudentObj
// Bootstrap -> level 8  (front)
// Express -> level 9  (back)
// SQL -> level 8   (data base)
// SQL -> ...  (data science)
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()



























