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