import { PersonalAccount } from './day15_classes.js' // just import for level 3

console.group('Level 1')
// Level 1
// ex1
console.warn('ex -> 1')
class Person {
    constructor(firstName, lastName, age, country, city, skills, enrolled) {
        this.firstNme = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.skills = skills
        this.enrolled = enrolled
    }
    getPersonInfo() {
        return `First name: ${this.firstNme}\nLast name: ${this.lastName}\nAge: ${this.age}\nCountry: ${this.country}\nCity: ${this.city}`
    }
}
const person1 = new Person('Oscar', 'Grand', 16, 'USA', 'Arizona')
console.log(person1.getPersonInfo())

const personInfoJSON = JSON.stringify(person1.getPersonInfo(), undefined, 4)
console.log(personInfoJSON)
const localStorePersonInfo = localStorage.setItem('personInfo', personInfoJSON)
console.log(localStorage.getItem('personInfo'))


console.groupEnd('Level 1')
console.group('Level 2')
// Level 2
// ex1
console.warn('ex -> 2')
const student = new Person('Hulio', 'Extrazio', 718, 'Swiss', 'Olten', ['JavaScript', 'CSS', 'HTML', 'React', 'Vue', 'SQL'], true)
const studentJSON = JSON.stringify(student, undefined, 4)
const lsStudent = localStorage.setItem('student', studentJSON)
console.log(localStorage.getItem('student'))

console.groupEnd('Level 2')
console.group('Level 3')
// Level 3
// ex1
console.warn('ex -> 3')
const acc2 = new PersonalAccount('Oscar',
'Grand',
[{source: 'job', income: 16718}, {source: 'frellance', income: 5000}, {source: 'selling', income: 718}, {source: 'selling', income: 599}, {source: 'trading', income: 123123}, {source: 'course', income: 23452}, {source: 'course', income: 12315}],
[{item: 'e-bike', expense: 5245}, {item: 'lamp', expense: 122}, {item: 'hookah', expense: 2435}, {item: 'sneakers', expense: 840}, {item: 'Honda GoldWing', expense: 75890}, {item: 'restoraunt', expense: 1234}])
console.log(acc2.getAccountInfo())
const acc2JSON = JSON.stringify(acc2, undefined, 4)
const lsAcc2 = localStorage.setItem('account2', acc2JSON)
console.log(localStorage.getItem('account2'))

console.groupEnd('Level 3')