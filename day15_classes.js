// Level 1
console.group('Level 1')
// ex1
class Animal {
    constructor(name = 'Vasilii',
                age = 5, 
                color = ['black', 'brown'], 
                legs = true, 
                owner = 'Bohdan',
                type = 'cat',
                gender = 'male',
                health = `it's healthy`,
                sterilization = false) {
        // console.log(this)
                this.name = name
                this.age = age
                this.color = color
                this.legs = legs
                this.owner = owner
                this.type = type
                this.gender = gender
                this.health = health
                this.sterilization = sterilization
                }

    isSterilizated() {
        if (this.sterilization === false) {
            return `didn't sterilizate`
        } else {
            return `sterilizated`
        }
    }

    legsAnswer() {
        if (this.legs === true) {
            return 'yes'
        } else {
            return 'no'
        }
    }       

    getFullInfo() {
        const fullInfo = `👾 Animal type: ${this.type}\n🎫 Animal name: ${this.name}\n👻 Animal age: ${this.age} y.o.\n🖌 Animal color: ${this.color.join(' + ')}\n🦵 Does animal have legs: ${this.legsAnswer()}\n👤 Animal owner: ${this.owner}\n⭕ Animal gender: ${this.gender}\n❤ Animal health: ${this.health}\n💢 Does animal have sterilization: ${this.isSterilizated()}`
        return fullInfo
    }
}

const animal1 = new Animal('Iriska', 1, ['white', 'brown', 'black'], true, 'Svitlana', 'cat', 'Female', 'stucked toy in stomach', 'no')
const animal2 = new Animal('Vasilii', 5, ['brown', 'black'], true, 'Bohdan', 'cat')
const defaultAnimal = new Animal() // you can see the difference in color array

console.log(animal1)
console.log(animal2)
console.table(defaultAnimal)
animal2.health = 'a little bit fat'
console.log(animal2.health)
console.log(defaultAnimal.getFullInfo())
// ex2
console.warn('ex -> 2')
class Dog extends Animal {
    constructor(name,age,color,legs,owner,gender,health,sterilization){
        super(name,age,color,legs,owner,gender,health,sterilization)
        this.type = 'dog'
    }
    getSound() {
        return '🐶 gav-gav'
    }
}
const dog1 = new Dog('Hurricane', 2, 'yellow', true, 'Oscar', 'male', 'super', true) 
console.log(dog1)
console.log(dog1.getSound())

class Cat extends Animal {
    constructor(name,age,color,legs,owner,gender,health,sterilization){
        super(name,age,color,legs,owner,gender,health,sterilization)
        this.type = 'cat'
    }
    getSound() {
        return '😸 meow-meow 🐱‍👤'
    }
}
const cat1 = new Cat('Meowlin', 3, 'black', true, 'Oscar', 'male', 'super', true) 
console.log(cat1)
console.log(cat1.getSound())

console.groupEnd('Level 1')
// Level 2
console.group('Level 2')
console.warn('ex -> 1')
// ex1
class Snake extends Animal {
    constructor(name,age,color,owner,gender,health){
        super(name,age,color,owner,gender,health)
        this.name = 'snakie-' + name
        this.age = 250
        this.color = ['black', 'yellow', 'green', 'blue', 'red']
        this.legs = false
        this.gender = 'unknown'
        this.health = 'very nice'
        this.type = 'snake'
    }
}
const snake1 = new Snake('Orochimaru')
console.table(snake1)

console.groupEnd('Level 2')
// Level 3
console.group('Level 3')
console.warn('ex -> 1')
// ex1
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(numbersArray){
        this.count = numbersArray.length
    }
    getSum(numbersArray) {
        const sum = numbersArray.reduce((acc, cur) => acc + cur)
        return sum
    }
    getMin(numbersArray) {
        const min = Math.min(...numbersArray)
        return min
    }
    getMax(numbersArray) {
        const max = Math.max(...numbersArray)
        return max
    }
    getRange(numbersArray) {
        const range = this.getMax(numbersArray) - this.getMin(numbersArray)
        return range
    }
    getMean(numbersArray) {
        const mean = Math.round(this.getSum(numbersArray) / this.count)
        return mean
    }
    getMode(numbersArray) {
        const uniqueNums = new Set(numbersArray)

        // const mode = numbersArray.toString().match(numbersArray.forEach(el => el))
        return uniqueNums
        // find the most frequence num
    }
}
const stat1 = new Statistics(ages)
console.log(stat1.getMode(ages))



// ex2
console.groupEnd('Level 3')