// 28.05.2022📝
// level 1

// let userAge = prompt('Enter your age')
// console.log(userAge >= 18 
//     ? `You are old enough to drive.✅` 
//     : `You are left with ${18 - userAge} years to drive.❌`)

// if (userAge >= 18) {
//     console.log(`You are old enough to drive.✅`)} else
//     if (userAge < 18) {
//         console.log(`You are left with ${18 - userAge} years to drive.❌`)} else
//             console.log(`Your value isn't a number.🤷‍♂️`)
        
// switch (true) {
//     case userAge >= 18:
//         console.log(`You are old enough to drive.✅`)
//         break
//     case userAge < 18:
//         console.log(`You are left with ${18 - userAge} years to drive.❌`)
//         break
//     default:
//         console.log(`Your value isn't a number.🤷‍♂️`)
// }
// ✅ done ↑ ✅ done ↑ ✅ done ↑

let myAge = 25
// let yourAge = prompt('enter your age:')
// if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me. 👴`)
// } else if (yourAge < myAge) {
//     console.log(`You are ${myAge - yourAge} years younger than me. 👶`)
// } else if (yourAge == myAge) {
//     console.log(`You are my peer. 😎`)
// } else {
//     console.log(`Your value isn't a number. 🔢`)
// }
// ✅ done ↑

let a = 4
let b = 3
if (a > b) {
    console.log(`a: ${a}\nb: ${b}\n"A" is greater then "b"`)
} else if (a < b) {
    console.log(`a: ${a}\nb: ${b}\n"a" is less then "B"`) 
} else if (a === b) {
    console.log(`a: ${a}\nb: ${b}\n"a" is equal to "b"`)
} 

a > b
    ? console.log(`a: ${a}\nb: ${b}\n"A" is greater then "b"`)
    : a < b
        ? console.log(`a: ${a}\nb: ${b}\n"a" is less then "B"`)
        : a === b
            ? console.log(`a: ${a}\nb: ${b}\n"a" is equal to "b"`)
: console.log(`a: ${a}\nb: ${b}\n"a" isn't equal to "b"`)

// let num = prompt('enter a number')
// if (num % 2 === 0) {
//     console.log(`Your number "${num}" is an even.`)
// } else {
//     console.log(`Your number "${num}" is an odd.`)
// }

// num % 2 === 0
//     ? console.log(`Your number "${num}" is an even.`)
//     : console.log(`Your number "${num}" is an odd.`)
// ✅ done ↑

// level 2
// 29.05.2022 📝
/*
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
// let score = prompt(`enter your score here:`)
// score >= 90
//     ? console.log(`Your grade is 🅰 which equals to your score ${score}. ⭐⭐⭐⭐⭐`)
//     : score >= 70
//         ? console.log(`Your grade is 🅱 which equals to your score ${score}. ⭐⭐⭐⭐`)
//         : score >= 60
//             ? console.log(`Your grade is C which equals to your score ${score}. ⭐⭐⭐`)
//             : score >= 50
//                 ? console.log(`Your grade is D which equals to your score ${score}. ⭐⭐`)
//                 : score >= 0
//                     ? console.log(`Your grade is F which equals to your score ${score}. ⭐`)
//                     : console.log(`Please enter a correct number. ❌`)

// switch (true) {
//     case score >= 90 && score <= 100:
//         console.log(`Your grade is 🅰 which equals to your score ${score}. 🟡🟡🟡🟡🟡`)
//     break
//     case score >= 70 && score <= 89:
//         console.log(`Your grade is 🅱 which equals to your score ${score}. 🟡🟡🟡🟡`)
//     break
//     case score >= 60 && score <= 69:
//         console.log(`Your grade is C which equals to your score ${score}. 🟡🟡🟡`)
//     break
//     case score >= 50 && score <= 59:
//         console.log(`Your grade is D which equals to your score ${score}. 🟡🟡`)
//     break
//     case score >= 0 && score <= 49:
//         console.log(`Your grade is F which equals to your score ${score}. 🟡`)
//     break
//     default:
//         console.log(`Please enter a correct number (0 - 100). ❌`)
// }

// if (score >= 90 && score <= 100) {
//     console.log(`Your grade is 🅰 which equals to your score ${score}. 🟨🟨🟨🟨🟨`)
// } else if (score >= 70 && score <= 89) {
//     console.log(`Your grade is 🅱 which equals to your score ${score}. 🟨🟨🟨🟨`)
// } else if (score >= 60 && score <= 69) {
//     console.log(`Your grade is C which equals to your score ${score}. 🟨🟨🟨`)
// } else if (score >= 50 && score <= 59) {
//     console.log(`Your grade is D which equals to your score ${score}. 🟨🟨`)
// } else if (score >= 0 && score <= 49) {
//     console.log(`Your grade is F which equals to your score ${score}. 🟨`)
// } else {
//     console.log(`Please enter a correct number (from 0 to 100). ❌`)
// }
// ✅ done ↑ ✅ done ↑ ✅ done ↑

// let month = prompt('enter a month:')
// let monthTLC = month.toLowerCase() 

// monthTLC  === 'september' || monthTLC === 'october' || monthTLC === 'november'
//     ? console.log('Now is Autumn. 🍁')
//     : monthTLC === 'december' || monthTLC === 'january' || monthTLC === 'february'
//         ? console.log('Now is Winter. ⛄')
//         : monthTLC === 'march' || monthTLC === 'april' || monthTLC === 'may'
//             ? console.log('Now is Spring. 🌱')
//             : monthTLC === 'june' || monthTLC === 'july' || monthTLC === 'august'
//                 ? console.log('Now is Summer. 🌳')
//                 : console.log('Please enter a correct name of season. ❌')

// switch (true) {
//     case monthTLC  === 'september' || monthTLC === 'october' || monthTLC === 'november':
//         console.log('Now is Autumn. 🍁')
//     break
//     case monthTLC === 'december' || monthTLC === 'january' || monthTLC === 'february':
//         console.log('Now is Winter. ⛄')
//     break
//     case monthTLC === 'march' || monthTLC === 'april' || monthTLC === 'may':
//         console.log('Now is Spring. 🌱')
//     break
//     case monthTLC === 'june' || monthTLC === 'july' || monthTLC === 'august':
//         console.log('Now is Summer. 🌳')
//     break
//     default:
//         console.log('Please enter a correct name of season. ❌')
// }

// if (monthTLC  === 'september' || monthTLC === 'october' || monthTLC === 'november') {
//     console.log('Now is Autumn. 🍁')
// } else if (monthTLC === 'december' || monthTLC === 'january' || monthTLC === 'february') {
//     console.log('Now is Winter. ⛄')
// } else if (monthTLC === 'march' || monthTLC === 'april' || monthTLC === 'may') {
//     console.log('Now is Spring. 🌱')
// } else if (monthTLC === 'june' || monthTLC === 'july' || monthTLC === 'august') {
//     console.log('Now is Summer. 🌳')
// } else {
//     console.log('Please enter a correct name of season. ❌')
// }
// ✅ done ↑ ✅ done ↑ ✅ done ↑

// let userDay = prompt(`enter a week's day`)
// let day = userDay.toLowerCase()

// day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'
//     ? console.log('Today is working day. ⚡')
//     : day === 'saturday' || day === 'sunday'
//         ? console.log('Today is weekend. 😎')
//         : console.log('There is no the day in the week. ❌')

// if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
//     console.log('Today is working day. ⚡')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Today is weekend. 😎')
// } else {
//     console.log('There is no the day in the week. ❌')
// }

// switch (true) {
//     case day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday':
//         console.log('Today is working day. ⚡')
//     break
//     case day === 'saturday' || day === 'sunday':
//         console.log('Today is weekend. 😎')
//     break
//     default:
//         console.log('There is no the day in the week. ❌')
// }
// ✅ done ↑ ✅ done ↑ ✅ done ↑

// level 3
// let userMonth = prompt(`enter a month to see days' number`)
// let month = userMonth.toLowerCase()

// month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december'
//     ? console.log(`${userMonth} has 31 days.`)
//     : month === 'april' || month === 'june' || month === 'september' || month === 'november'
//         ? console.log(`${userMonth} has 30 days.`)
//         : month === 'february'
//             ? console.log(`${userMonth} has 28 days.`)
//             : console.log(`${userMonth} isn't a month. ❌`)

// if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december') {
//     console.log(`${userMonth} has 31 days.`)
// } else if (month === 'april' || month === 'june' || month === 'september' || month === 'november') {
//     console.log(`${userMonth} has 30 days.`)
// } else if (month === 'february') {
//     console.log(`${userMonth} has 28 days.`)
// } else {
//     console.log(`${userMonth} isn't a month. ❌`)
// }

// switch (true) {
//     case month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december':
//         console.log(`${userMonth} has 31 days.`)
//     break
//     case month === 'april' || month === 'june' || month === 'september' || month === 'november':
//         console.log(`${userMonth} has 30 days.`)
//     break
//     case month === 'february':
//         console.log(`${userMonth} has 28 days.`)
//     break
//     default:
//         console.log(`${userMonth} isn't a month. ❌`)
// }
// ✅ done ↑ ✅ done ↑ ✅ done ↑

// 30.05.2022
let time = new Date()
// month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december'
//     ? console.log(`${userMonth} has 31 days.`)
//     : month === 'april' || month === 'june' || month === 'september' || month === 'november'
//         ? console.log(`${userMonth} has 30 days.`)
//         : month === 'february' && (time.getFullYear() / 4).toString().length === 3
//             ? console.log(`${userMonth} has 29 days. It's a leap year!`)
//             : month === 'february'
//                 ? console.log(`${userMonth} has 28 days.`)
//                 : console.log(`${userMonth} isn't a month. ❌`)

// my tests for task above ↓↑
// let year = time.getFullYear() + 2
// let checkLeapYear = year / 4
// let strYear = checkLeapYear.toString()
// console.log(strYear.length === 3)

// let check = prompt(`enter a feb`)
// check === 'feb' && ((time.getFullYear() + 2)/ 4).toString().length === 3
//     ? console.log('⭐ SUCCESSFUL ⭐')
//     : console.log('something was wrong...')
// it works! ↑ ✅

// if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december') {
//     console.log(`${userMonth} has 31 days.`)
// } else if (month === 'april' || month === 'june' || month === 'september' || month === 'november') {
//     console.log(`${userMonth} has 30 days.`)
// } else if (month === 'february' && (time.getFullYear() / 4).toString().length === 3) {
//     console.log(`${userMonth} has 29 days. It's a leap year!`)
// } else if (month === 'february') {
//     console.log(`${userMonth} has 28 days.`)
// } else {
//     console.log(`${userMonth} isn't a month. ❌`)
// }

// switch (true) {
//     case month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december':
//         console.log(`${userMonth} has 31 days.`)
//     break
//     case month === 'april' || month === 'june' || month === 'september' || month === 'november':
//         console.log(`${userMonth} has 30 days.`)
//     break
//     case month === 'february' && (time.getFullYear() / 4).toString().length === 3:
//         console.log(`${userMonth} has 29 days. It's a leap year!`)
//     break
//     case month === 'february':
//         console.log(`${userMonth} has 28 days.`)
//     break
//     default:
//         console.log(`${userMonth} isn't a month. ❌`)
// }
// ✅ done ↑ ✅ done ↑ ✅ done ↑