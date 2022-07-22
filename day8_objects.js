// level 1
// ex1
const dog = {}

// ex 2
console.log(dog)

// ex3
dog.name = 'Oscar'
dog.legs = 2
dog.color = 'yellow'
dog.age = 1
dog['bark properties'] = (function () {
    return `woof woof`
})()
console.log(dog)

// ex4
console.log(Object.values(dog))

// ex5
dog.breed = 'golden retriever'
dog.getInfo = (function () {
    return Object.entries(dog)
})()
console.log(dog)

// level 2
// ex1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

const values = Object.values(users)
console.log(values[0].skills)
console.log(values.length)

const allSkills = []
for (let i = 0; i <= values.length - 1; i++) { // a loop which find skills' amount for each person
  allSkills[i] = values[i].skills.length
}
console.log(allSkills)

let findMax = Math.max(...allSkills) // find the max value of skills
console.log(findMax) // shows the max number of the array

let indexMax = allSkills.indexOf(findMax) // find the index of the max number in the array
const keys = Object.keys(users) // find names of all men
console.log(keys[indexMax]) // show the person which has many skills then other

// ex2
const checkUserLog = (obj) => {
  const loggedUsers = []
  const unLoggedUsers = []
  for (let i = 0; i <= values.length - 1; i++) {
    if (values[i].isLoggedIn === true) {
      loggedUsers.push(keys[i])
    } else {
      unLoggedUsers.push(keys[i])
    }
  }
  console.log(`❌ ${unLoggedUsers.join('\n❌ ')}`)
  return `✅ ${loggedUsers.join('\n✅ ')}`
}
console.log(checkUserLog(users))

const compareUserPoints = (obj) => {
  const allPoints = []
  for (let i = 0; i <= values.length - 1; i++) {
    allPoints[i] = values[i].points
  }
  console.log(allPoints)
  
  for (let i = 0; i <= values.length - 1; i++) {
    if (allPoints[i] >= 50) {
      console.log(`✔ ${keys[i]} has: ${allPoints[i]} points.`)
    } else {
      console.log(`💧 ${keys[i]} has: ${allPoints[i]} points.`)
    }
  }
  return ``
}
console.log(compareUserPoints(users))

// ex3