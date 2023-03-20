// Level 1
// ex1
const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
document.querySelector('body').appendChild(wrapper)

wrapper.style.width = '100%'
wrapper.style.background = 'khaki'
wrapper.style.height = 'auto'
wrapper.style.display = 'flex'
wrapper.style.flexWrap = 'wrap'
wrapper.style.justifyContent = 'flex-start'
wrapper.style.gap = '10px'
wrapper.style.padding = '15px'

const isPrime = num => {    // a finction for checking prime numbers
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

for (let i = 0; i <= 100; i++) {
    let numItem = document.createElement('div')
    numItem.className = 'num-item'
    numItem.id = `item-${i}`
    numItem.textContent = `num ${i}`
    numItem.style.width = '100px'
    numItem.style.height = '30px'
    numItem.style.border = '2px dashed black'
    numItem.style.display = 'flex'
    numItem.style.alignItems = 'center'
    numItem.style.justifyContent = 'center'

    if (i % 2) {    // for odd nums
        numItem.style.background = 'gold'
    } else {
        numItem.style.background = 'darkseagreen'
    }

    if (isPrime(i)) {   // check if the number is prime
        numItem.style.background = 'salmon'
    }

    document.querySelector('.wrapper').appendChild(numItem)
}

// Level 2
// ex1

// Level 3
// ex1