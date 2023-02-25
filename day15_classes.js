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

console.groupEnd('Level 1')
// Level 2
// ex1

// Level 3
// ex1
// ex2