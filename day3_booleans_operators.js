// 27.05.2022 - 28.05.2022
// level 1
let firstName = 'Bohdan 👤'
let lastName = 'Lavrentiev ⭐'
let country = 'USA 🗽'
let city = 'Phoenix 🌵'
let age = 25
let isMarried = false
// let year = 2022
let time = new Date()   

console.log(`🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧`,
            `\n\nvar: firstName \ndata: ${firstName} \ntype:`, typeof(firstName),
            `\n\nvar: lastName \ndata: ${lastName} \ntype:`, typeof(lastName),
            `\n\nvar: country \ndata: ${country} \ntype:`, typeof(country),
            `\n\nvar: city \ndata: ${city} \ntype:`, typeof(city),
            `\n\nvar: age \ndata: ${age} \ntype:`, typeof(age),
            `\n\nvar: isMarried \ndata: ${isMarried} \ntype:`, typeof(isMarried),
            `\n\nvar: time \ndata: ${time.getFullYear()} \ntype:`, typeof(time),
            `\n\n🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧`)

console.log(typeof(age) === typeof('25'))
console.log(typeof(parseInt('24.8')) === typeof(age))

console.log(isMarried === false, 16 == '16', NaN !== false)
console.log(isMarried === true, 718 === '718', undefined == false)

let py = 'python'
let ja = 'jargon'
let dr = 'dragon'
console.log(`🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩`,
            `\n\n4 > 3: true -`, 4 > 3,
            `\n\n4 >= 3: true -`, 4 >= 3,
            `\n\n4 < 3: false -`, 4 < 3,
            `\n\n4 <= 3: false -`, 4 <= 3,
            `\n\n4 == 4: true -`, 4 == 4,
            `\n\n4 === 4: true -`, 4 === 4,
            `\n\n4 != 4: false -`, 4 != 4,
            `\n\n4 !== 4: false -`, 4 !== 4,
            `\n\n4 != '4': false -`, 4 != '4',
            `\n\n4 == '4: true -`, 4 == '4',
            `\n\n4 === '4: false -`, 4 === '4',
            `\n\n4 >= 3: true -`, 4 >= 3,
            `\n\npy(${py.length}) == ja(${ja.length} + 1):`, py.length == ja.length + 1,
            `\n\n🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩`)

console.log(`🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣`,
            `\n\n4 > 3 && 10 < 12: true -`, 4 > 3 && 10 < 12,
            `\n\n4 > 3 && 10 > 12: false -`, 4 > 3 && 10 > 12,
            `\n\n4 > 3 || 10 < 12: true -`, 4 > 3 || 10 < 12,
            `\n\n4 > 3 || 10 > 12: true -`, 4 > 3 || 10 > 12,
            `\n\n!(4 > 3): false -`, !(4 > 3),
            `\n\n!(4 < 3): true -`, !(4 < 3),
            `\n\n!(false): true -`, !(false),
            `\n\n!(4 > 3 && 10 < 12): false -`, !(4 > 3 && 10 < 12),
            `\n\n!(4 > 3 && 10 > 12): true -`, !(4 > 3 && 10 > 12),
            `\n\n!(4 === '4'): true -`, !(4 === '4'),
            `\n\nThere is no 'on' in both ${dr} and ${py}: false -`, dr.includes('on') !== ja.includes('on'),
            `\n\n🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣`)

console.log(`🕙🕗🕞🕠🕝🕒🕔🕦🕕🕣`,
            `\n\nToday is: ${time.getFullYear()} year.`,
            `\n\nToday is: ${time.getMonth() + 1} number of a month.`,
            `\n\nToday is: ${time.getDate()} day of the current month.`,
            `\n\nToday is: ${time.getDay()} day of the current week.`,
            `\n\nNow is: ${time.getHours()} hours.`,
            `\n\nNow is: ${time.getMinutes()} minutes.`,
            `\n\nNow is: ${time.getTime()} seconds (passed from the January 1, 1970 to now)`,
            `\n\n🕙🕗🕞🕠🕝🕒🕔🕦🕕🕣`)

// level 2
// let base = prompt('↔ BASE ↔', 'enter the base here')
// let height = prompt('↕ HEIGHT ↕', 'enter the height here')
// console.log(`Your BASE: ${base} 
//             \n\nYour HEIGHT: ${height} 
//             \n\nThe area of the triangle 📐 is ${base * height * 0.5}`)
// done ✅ ↑

// let sideA = prompt('side A', 'enter side A here')
// let sideB = prompt('side B', 'enter side B here')
// let sideC = prompt('side C', 'enter side C here')
// console.log(`Your side A: ${sideA} 
// Your side B: ${sideB}
// Your side C: ${sideC}
// \nThe perimeter of your triangle is ${+sideA + +sideB + +sideC} 📐`)
// done ✅ ↑

// let length = prompt('LENGHT', '...')
// let width = prompt('WIDTH', '...')
// console.log(`Your lenght: ${length}
// Your width: ${width}
// \nThe area of rectangle is ${length * width} ✉`)
// done ✅ ↑

// const pi = 3.14
// let radius = prompt('🟡 RADIUS 🟡')
// console.log(`Your radius: ${radius}
// Your area of a circle is ${pi * 2 * radius}`)
// done ✅ ↑

// let x = prompt('X', 'Enter your "x" please')
// console.log(`Your x: ${x}
// Task info: y = 2x - 2
// Solution: y = 2 * ${x} - 2
// y = ${2 * x - 2}`)
// done ✅ ↑

// ex 6-7 was skipped ❌

// let x = prompt('Your X')
// console.log(`Your X: ${x}
// Task info: y = x^2 + 6x + 9
// Solution: y = ${x ** 2 + 6 * x + 9}`)
// done ✅ ↑

// let hours = prompt('HOURS, how many times do you work?')
// let rate = prompt('RATE/hour', 'what is your rate per hour?')
// console.log(`Your hours: ${hours}
// Your rate: ${rate} per hour
// Your weekly earning is: ${hours * rate}`)
// done ✅ ↑

console.log(firstName.length > 7 ? `my name is long` : `my name is short`)
// console.log(firstName.length)
// console.log(firstName)

console.log(firstName.length > lastName.length ? `your first name "${firstName}" is longer than your last name "${lastName}"` : `your last name "${lastName}" is longer than your first name "${firstName}"`)

let newAge = 718
console.log(age > newAge ? `I'm ${age - newAge} years older than you. 👴` : `I'm ${Math.abs(age - newAge)} younger than you. 👶`)

// let userBirthday = prompt('Enter your BIRTHDAY year↓', 'for example: 1997')
// let userAge = time.getFullYear() - userBirthday
// console.log(`You are: ${userAge} y.o.`,
// userAge >= 18 ? `\nYou are old enough to drive. ✔` : `\nYou will be allowed to drive after ${18 - userAge} years. ❌`)
// done ✅ ↑

// let yo = prompt('Enter your number of years please', 'for example: 16')
// console.log(`You lived ${yo * 365 * 24 * 60 * 60} seconds! 🤯`,
//             `\nOr from UNIX time you lived ${time.getTime() - (time.getTime() - (yo * 365 * 24 * 60 * 60))}`)
// done ✅ ↑
// how to calculate exactly life time from UNIX in seconds? ❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓

console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}
\n${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}
\n${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)

// level 3
let year = time.getFullYear()
let month = time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : `${time.getMonth() + 1}`
let day = time.getDate() < 10 ? `0${time.getDate()}` : `${time.getDate()}`
let hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`
let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
// end of the day3 ↑ 