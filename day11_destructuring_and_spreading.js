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
const newStudent = {...convertArrayToObject(students)}  // {{},{}}

const transformedStudents = students.map(([name, skills, scores]) => ({
  name,
  age: 25,
  skills: {
    frontEnd: [
      {
        skill: skills[0].toString().concat('L'), // because first result was 'HTM'. I added 'L' to get the 'HTML' result
        level: (function () {
          if (scores[0] > 95) {
            return 10
          }

          if (scores[0] <= 90) {
            return 8
          }

          if (scores[0] >= 90 || scores[0] <= 94) {
            return 9
          }
        })(scores)
      },

      {
        skill: skills[1],
        level: (function () {
          if (scores[1] > 95) {
            return 10
          }

          if (scores[1] <= 90) {
            return 8
          }

          if (scores[1] >= 90 || scores[1] <= 94) {
            return 9
          }
        })(scores)
      },

      {
        skill: skills[2],
        level: (function () {
          if (scores[2] > 95) {
            return 10
          }

          if (scores[2] <= 90) {
            return 8
          }

          if (scores[2] >= 90 || scores[2] <= 94) {
            return 9
          }
        })(scores)
      },

      {
        skill: skills[3],
        level: (function () {
          if (scores[3] > 95) {
            return 10
          }

          if (scores[3] <= 90) {
            return 8
          }

          if (scores[3] >= 90 || scores[3] <= 94) {
            return 9
          }
        })(scores)
      }
    ],

    backEnd: [
      {skill: 'Node', level: 7},
      {skill: 'GraphQL', level: 8},
      {skill: 'Express', level: 9}
    ],

    dataBase: [
      {skill: 'MongoDB', level: 7.5},
      {skill: 'SQL', level: 8}
    ],

  dataScience: ['Python', 'R', 'D3.js', 'SQL']
  }
}));

console.log(transformedStudents)