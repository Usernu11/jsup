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
console.warn('Level 3 -> ex1')
// ex1
const personAccount = (
    fn = 'Forest',
    ln = 'Cloud',
    inc = [
      { source: 'invest', income: 1600 },
      { source: 'freelance', income: 7180 },
      { source: 'job', income: 70127 }
    ],
    exp = [
      { item: 'e-bike', expense: 7000 },
      { item: 'house', expense: 121234 },
      { item: 'Dodge Caliber', expense: 18488 }
    ]
  ) => {
    let firstName = fn
    let lastName = ln
    let incomes = inc
    let expenses = exp
    let totalIncome = calculateTotalIncome()
    let accountBalance = calculateAccountBalance()
  
    const addIncome = (objInc) => {
      incomes.push(objInc)
      totalIncome = calculateTotalIncome()
      accountBalance = calculateAccountBalance()
    }
  
    const addExpense = (objExp) => {
      expenses.push(objExp)
      accountBalance = calculateAccountBalance()
    }
  
    function calculateTotalIncome() {
      return incomes.reduce((acc, cur) => {
        return acc + cur.income
      }, 0)
    }
  
    function calculateTotalExpense() {
      return expenses.reduce((acc, cur) => {
        return acc + cur.expense
      }, 0)
    }
  
    function calculateAccountBalance() {
      return totalIncome - calculateTotalExpense() 
    }
  
    const accountInfo = () => {
      return `First Name: ${firstName}\nLast Name: ${lastName}\nTotal Incomes: ${totalIncome}\nTotal Expenses: ${calculateTotalExpense()}\nAccount Balance: ${accountBalance}`
    }
  
    return {
      incomes,
      expenses,
      totalIncome,
      totalExpense: calculateTotalExpense(),
      accountInfo,
      addIncome,
      addExpense,
      accountBalance,
    }
  }
  
  const getInfoPA = personAccount()
  
  getInfoPA.addIncome({ source: 'marketplace', income: 100000 })
  console.log(getInfoPA.accountInfo())