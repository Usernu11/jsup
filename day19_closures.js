// Level 1
// ex1
const calc = () => {
    let result = 0
    const plusOne = () => {
        result++
        return result
    }
    return plusOne
}
const plusOne = calc()
console.log(plusOne())
console.log(plusOne())
console.log(plusOne())


// Level 2
// ex1
const calc2 = () => {
    let result = 0
    const minusOne = () => {
        result--
        return result
    }
    const timesTwo = () => {
        result *= 2
        return result
    }
    const devideTwo = () => {
        result /= 2
        return result
    }
    return {minusOne, timesTwo, devideTwo}
}
const calculate = calc2()
console.log(calculate.minusOne(), calculate.timesTwo(), calculate.timesTwo(), calculate.devideTwo())

// Level 3
// ex1