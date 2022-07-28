import { countriesObjects } from "./countries.js"
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
let arrLen = values.length - 1
const findMERN = (obj) => {
  const merns = []
  for (let i = 0; i <= arrLen; i++) {
    if (values[i].skills.includes('MongoDB') &&
         values[i].skills.includes('Express') &&
          values[i].skills.includes('React') &&
           values[i].skills.includes('Node') ||
            values[i].skills.includes('Node.js')) {
      merns.push(keys[i])
    }
  }
  return `This people has MERN stack:\n🤖 ${merns.join(`\n🤖 `)}`
}
console.log(findMERN(users))

// ex4
const copyUsers = Object.assign({}, users) // copy an object without modifying original
const addStuff = (obj, name, age) => {
  let userAge = age
  let userNameEmail = name.toLowerCase()
  copyUsers[`${name}`] = {} // setting a new key for the object
  copyUsers[`${name}`].email = `${userNameEmail}@${userNameEmail}.com`
  copyUsers[`${name}`].skills = ['HTML','CSS','JavaScript','SaaS'] // setting new skills
  copyUsers[`${name}`].isLoggedIn = true // setting a new login
  copyUsers[`${name}`].age = userAge // setting a new age
  copyUsers[`${name}`].points = 50 // setting new points
  return copyUsers // shows the results 
}
console.log(addStuff(copyUsers, 'Bohdan', 25))

// ex5
const getObjectKeys = (obj) => {
  console.log('🔑 All keys and properties ↓')
  return Object.entries(obj)
} 
console.log(getObjectKeys(copyUsers))

// ex6
const getObjectValues = (obj) => {
  console.log(`🎹 All values:`)
  return Object.values(obj)
}
console.log(getObjectValues(copyUsers))

// ex7
console.log(countriesObjects) // import from countries.js (just test) ✔

const getCountriesInfo = (obj) => {
  let objLength = obj.length - 1
  for (let i = 0; i <= objLength; i++) {
    console.log('')
    console.log(`🗾 Country: ${obj[i].name}`)
    console.log(`🚩 Capital: ${obj[i].capital}`)
    console.log(`🌝 Population: ${obj[i].population}`)
    console.log(`🛬 Languages: ${obj[i].languages.join(' * ')}`)
  }
  return ``
}
console.log(getCountriesInfo(countriesObjects))

// level 3
// ex1
const personAccount = {
  firstName: 'Oscar',
  lastName: 'Grand',
  incomes: {
    itCompany: 16000,
    volleyball: 3000,
    freelance: 1500,
    other: 718
  },
  expenses: {
    houseRent: 1200,
    food: 3000,
    internet: 30,
    phone: 20,
    volleyball: 500,
    bike: 700,
    support: 500
  },
  totalIncome: function () {
    const incomesArray = Object.values(this.incomes)
    let incomesLength = incomesArray.length - 1
    let total = 0;
    for (let i = 0; i <= incomesLength; i++) {
      total += incomesArray[i] 
    }
    return total
  },
  totalExpense: function () {
    const expenseArray = Object.values(this.expenses)
    let expenseLenght = expenseArray.length - 1
    let total = 0
    for (let i = 0; i <= expenseLenght; i++) {
      total += expenseArray[i]
    }
    return total
  },
  accoutInfo: function () {
    return `🟣 First name: ${this.firstName}\n🔵 Last name: ${this.lastName}\n🟢 Total income: $${this.totalIncome()}\n🔴 Total expense: $${this.totalExpense()}\n🟡 Account balance: $${this.accoutBalance()}`
  },
  addIncome: function (num) {
    this.incomes.push(num)
  },
  addExpense: function (num) {
    this.expenses.push(num)
  },
  accoutBalance: function () {
    return this.totalIncome() - this.totalExpense()
  }
}
console.log(personAccount.accoutInfo())

// ex2
// the 2 following arrays are from course data 📜
const users2 = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// my code goes here
console.log('')
const signUp = (name,pass) => {
  const usersCount = users2.length - 1 // use for loop 
  const randomId = [] // a new randomID for new user
  const userNames = []
  const userPasswords = []

  for (let i = 0; i <= 5; i++) { // a loop for filling "randomId" 🎲
    let randomNum = Math.floor(Math.random() * 10) // generate 0-9 numbers
    let randomNumsAlphabet = Math.ceil(Math.random() + 96) + Math.ceil(Math.random() * 25) // a range 97-122
    let ranAblhabet = String.fromCharCode(randomNumsAlphabet) // random word from an alphabet
    let shortRandomNum = Math.floor(Math.random() * 2) // gen nums 0-1
    if (shortRandomNum === 0) {
      randomId.push(randomNum)
    } else {
      randomId.push(ranAblhabet)
    }
  }
  
  for (let i = 0; i <= usersCount; i++) { // collect all names and passwords to arrays
    let tempUserInfo = Object.values(users2[i]) // all info about each user
    userNames[i] = tempUserInfo[1]
    userPasswords[i] = tempUserInfo[3]
  }

  let passIndex = userNames.indexOf(name) // shows an index of a name
  if (userNames.includes(name)) { // check name
    if (pass === userPasswords[passIndex]) {
      return `💢 You already have an account.`
    } else {
      return `❌ Wrong password.`
    }
  } else {
    users2.push({
      _id: randomId.join('').toString(), // at the moment it will be without checking for unique id,
      username: name,
      email: `${name.toLowerCase()}@${name.toLowerCase()}.com`,
      password: pass,
      createdAt: function () {
        let time = new Date()
      
        let month = time.getMonth() + 1
        let day = time.getDate()
        let year = time.getFullYear()
      
        let hours = time.getHours()
        let minutes = time.getMinutes()
      
        let amPM = null
        if (hours > 12) {
          amPM = 'PM'
        } else {
          amPM = 'AM'
        }
      
        let CDT = `${month}/${day}/${year} ${hours}:${minutes} ${amPM}`
        return CDT
      }(),
      isLoggedIn: true
  })
  }
  return users2
}
console.log(signUp('Oscar','718718'))