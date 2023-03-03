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
        this.numbersArray = numbersArray    // using for using in methods below like 'this.numbersArray' and don't pass it to methods' arguments like getSum(numbersArray) which longer in total, than just creating the key and value
    }
    getSum() {
        const sum = this.numbersArray.reduce((acc, cur) => acc + cur)
        return sum
    }
    getMin() {
        const min = Math.min(...this.numbersArray)
        return min
    }
    getMax() {
        const max = Math.max(...this.numbersArray)
        return max
    }
    getRange() {
        const range = this.getMax(this.numbersArray) - this.getMin(this.numbersArray)
        return range
    }
    getMean() {
        const mean = Math.round(this.getSum(this.numbersArray) / this.count)
        // return `Mean: ${mean}`
        return mean
    }
    getMode() {
        let freqNum = 0             // the most frequency num
        let freqNumCount = 0        // how many times the num meet in an array
        let modeObj = {}
        const mode = this.numbersArray.forEach(el => {
            let numPattern = new RegExp(el, 'g')    // regex for finding all numbers in an array
            // console.log(numbersArray.toString().match(numPattern).length)
            if (this.numbersArray.toString().match(numPattern).length > freqNumCount) {  // if a num > 0
                freqNum = el    // rewrite 0 to the num
                freqNumCount = this.numbersArray.toString().match(numPattern).length     // rewrite count from 0 to the num count
            }
        })
        modeObj = {mode: freqNum, count: freqNumCount}
        return modeObj
    }
    getVariance() {
        const meanDifference = []
        const squaredNums = []

        const difference = this.numbersArray.forEach(el => {
            meanDifference.push(el - this.getMode(this.numbersArray).mode)
        })

        const squareNums = meanDifference.forEach(el => {
            squaredNums.push(el**2)  
        })

        const variance = squaredNums.reduce((acc,cur) => acc + cur) / this.count

        return variance     // the result 30.68 isn't correct if we will compare to course's result which = 17.5
                            // But I did it using 'mathisfun' resource in the internet, so I suppose it's correct
                            // Maybe there are my mistakes in the code
    }
    getStandartDeviation() {
        return +Math.sqrt(this.getVariance()).toFixed(2)
    }
    getFrequencyDestribution() {
        const fdb = []      // frequency destribution array
        let uniqueNums = new Set(this.numbersArray)     // found unique numbers
        let uniqueNumsArray = [...uniqueNums]           // converted Set to Array
        
        for (let i = 0; i <= uniqueNumsArray.length - 1; i++) {
            let numPattern = new RegExp(uniqueNumsArray[i], 'g')    // special number
            let findNumCount = this.numbersArray.toString().match(numPattern).length   // count of special num
            fdb.push({[uniqueNumsArray[i]]: findNumCount})
        }
        
        return fdb
    }
    getFDB() {
        const fdbResult = this.getFrequencyDestribution(this.numbersArray)
        const newFDB = []
        for (let i = 0; i <= fdbResult.length - 1; i++) {
            let keys = Object.keys(fdbResult[i])
            let values = Object.values(fdbResult[i])
            newFDB.push(keys)
            newFDB.push(values)
            // console.log(values)
        }

        const oddNums = []
        const evenFreq = []
        for (let p = 0; p <= newFDB.length - 1; p++) {
            if (p % 2 !== 0) {
                evenFreq.push(newFDB[p])
            } else {
                oddNums.push(newFDB[p])
            }
        }

        const newFDB2 = []
        for (let k = 0; k <= oddNums.length - 1; k++) {
            newFDB2.push(`\n${oddNums[k]} => ${evenFreq[k]}`)
        }
        
        return newFDB2.join('')
    }
    getFullStat() {
        return `Count: ${this.count}
Sum: ${this.getSum()}
Min: ${this.getMin()}
Max: ${this.getMax()}
Range: ${this.getRange()}
Mean: ${this.getMean()}
Mode: ${this.getMode().mode} -> (${this.getMode().count} times) 
Variance: ${this.getVariance()}
Standart Deviation: ${this.getStandartDeviation()}
Frequency Destribution: ${this.getFDB()}`
    }
}
const stat1 = new Statistics(ages)
console.log(stat1.getFullStat())
// console.log(stat1.getFDB())
// console.log(stat1.getFrequencyDestribution())

// ex2
console.warn('ex -> 2')
class PersonalAccount {
    constructor(firstName, 
                lastName,
                incomes,
                expenses) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
        this.totalIncomes = 0
        this.totalExpenses = 0
    }
    getTotalIncome() {
        let totalIncome = 0
        this.incomes.forEach(el => {
            totalIncome += el.income
        })
        return totalIncome
    }
    getTotalExpense() {
        let totalExpense = 0
        this.expenses.forEach(el => {
            totalExpense += el.expense
        })
        return totalExpense
    }
    getAccountInfo() {
        return `👤 First Name: ${this.firstName}\n👤 Last Name: ${this.lastName}\n💳 Total Income: ${this.getTotalIncome()} CHF\n🧾 Total Expense: ${this.getTotalExpense()} CHF\n⚖ Account Balance: ${this.getAccountBalance()} CHF`
    }
    addIncome(obj) {
        this.incomes.push(obj)
    }
    addIncomes(objArray) {
        this.totalIncomes = objArray.reduce((acc, cur) => acc + cur.income, 0)
        return this.totalIncomes
    }
    addExpense(obj) {
        this.expenses.push(obj)
    }
    addExpenses(objArray) {
        this.totalExpenses = objArray.reduce((acc, cur) => acc + cur.expense, 0)
        return this.totalExpenses
    }
    getAccountBalance() {
        return this.getTotalIncome() - this.getTotalExpense() + this.totalIncomes - this.totalExpenses
    }
}
const acc1 = new PersonalAccount('Oscar',
                                 'Grand',
                                 [{source: 'job', income: 16718}, {source: 'frellance', income: 5000}, {source: 'selling', income: 718}, {source: 'selling', income: 599}, {source: 'trading', income: 123123}, {source: 'course', income: 23452}, {source: 'course', income: 12315}],
                                 [{item: 'e-bike', expense: 5245}, {item: 'lamp', expense: 122}, {item: 'hookah', expense: 2435}, {item: 'sneakers', expense: 840}, {item: 'Honda GoldWing', expense: 75890}, {item: 'restoraunt', expense: 1234}])
console.log(acc1.addIncome({source: 'selling', income: 100}))
console.log(acc1.addExpense({item: 'Dodge Caliber', expense: 7000}))
console.log(acc1.addIncomes([{source: 'trading', income: 1238}, {source: 'trading', income: 12218}, {source: 'trading', income: 21238}]))
console.log(acc1.addExpenses([{item: 'house rent', expense: 13000}, {item: 'trading', expense: 30000}, {item: 'cafe', expense: 7000}]))
console.log(acc1.getAccountInfo())
// console.log(acc1.getTotalIncome())
// console.log(acc1.totalIncomes)

console.groupEnd('Level 3')
export { PersonalAccount }