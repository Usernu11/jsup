// level 1
// ex1
let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let allNumbersPattern = /\d+/g
let allNumbers = str.match(allNumbersPattern) // ['4000', '10000', '5500']
let calc = (+allNumbers[0] * 12) + (+allNumbers[2] * 12) + +allNumbers[1]
console.log(allNumbers)

console.log(`The amount of the annual sallary: $${calc}`)

// ex2
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// 1. find neg nums using regex
// 2. find pos nums using regex
// 3. sort them
// 4. concat them

// 5. find max and min nums
// 6. calculate the disctance

// const sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8] -> result
// distance = 12 -> result

const negNumsPattern = /-\d+/g              // 1
const posNumsPattern = /(?<!-)\b\d+\b/g     // 2

const negNums = points.toString().match(negNumsPattern).sort().reverse() // 3
const posNums = points.toString().match(posNumsPattern).sort() // 3

const sortedNums = negNums.concat(posNums)  // 4 

const findMin = Math.min(...sortedNums)     // 5
const findMax = Math.max(...sortedNums)     // 5

let calcDistance = Math.abs(findMin) + findMax  // 6

console.log(calcDistance) // 6

// ex3