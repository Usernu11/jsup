console.group('Level 1')
// Level 1
// ex1
console.warn('ex -> 1')
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstNme = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
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


console.groupEnd('Level 2')
console.group('Level 3')
// Level 3
// ex1
console.warn('ex -> 3')


console.groupEnd('Level 3')