// data for examples
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

console.group('Level 1')
// Level 1
// ex1
console.warn('ex -> 1')

console.time('fetch')
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            const languages = el.languages.map(lang => lang.name).join(', ');
            // console.log(el.languages.map(lang => lang.name))

            // console.log(`🎫 Country name: ${el.name}\n⛳ Country capital: ${el.capital}\n🎭 Country languages: ${languages}\n🎎 Country population: ${el.population}\n🧩 Country area: ${el.area}`)
        })
    })
    .catch(error => console.error(error))
console.timeEnd('fetch')

console.groupEnd('Level 1')

console.group('Level 2')
// Level 2
// ex1
console.warn('ex -> 1')

let catNames = []
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.forEach(el => {
            catNames.push(el.name)
        })
    })
    .catch(error => console.error(error))
console.log(catNames)

console.groupEnd('Level 2')

console.group('Level 3')
// Level 3
// ex1
console.warn('ex -> 1')
const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        const cats = await response.json()
        console.log(cats)
        cats.forEach(el => {                                        // 4
            let catMetricWeight = el.weight.metric                  // 1 
            let splittedWeightData = catMetricWeight.split(' ')     // 2
            let calcAverageWeight = (+splittedWeightData[0] + +splittedWeightData[2]) / 2   // 3
            let catName = el.name   // 5
            console.log(`🐱 ${catName}\n🔘 Average weight: ${calcAverageWeight} kg`)
        })
    } catch (err) {
        console.log(err)
    }
}
fetchData() // <- put here 'catsAPI'

// plan ↑
// 1. print the metric weight param in console log
// 2. split the str
// 3. calculate the average weight
// 4. do it for all cats
// 5. beautify the results, using cat names

// ex2
console.warn('ex -> 2')
const getTenLargestCountries = async (url, full = false) => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)

        // let sortedCountries = countries.sort((a,b) => {
        //     return Number(b.area) - Number(a.area)
        // })
        let sortedCountries = countries.sort((a, b) => { // 1
            const areaA = +a.area || 0;
            const areaB = +b.area || 0;
            return areaB - areaA;
        });
        let topTen = sortedCountries.slice(0, 10)       // 2        

        let isFull = full

        if (isFull === false) {                         // 3,4
            topTen.forEach(el => {
                console.log(`🎫 Country: ${el.name}\n🗾 Area: ${el.area}`)  // 5
            })
        } else {
            console.log(topTen)
        }
    } catch (err) {
        console.log(err)
    }
}
getTenLargestCountries() // <- put here 'countriesAPI'

// plan ↑
// 1. sort countries obj array by -> AREA 
// 2. cut the results until 10  
// 3. make a special way (if the full arg is true -> give full info about countries)
// 4. do it for all cats
// 5. beautify the results (country name + area)

// ex3
console.warn('ex -> 3')
const getOffLangs = async (url) => {
    try {
        const response = await fetch(url)
        const countries = await response.json()

        const languages = countries.reduce((acc, cur) => {
            cur.languages.forEach((language) => {
                acc.add(language.name);
            });
            return acc;
        }, new Set());

        languages.forEach((language) => console.log(`🙂 ${language}`));

        return languages;
    } catch (err) {
        console.error(err)
    }
}
getOffLangs() // <- put here 'countriesAPI'

console.groupEnd('Level 3')

// Additional simple exercises
// 1. Write a function that takes a number and returns a Promise that resolves with the square of that number.
const squareNum = (n) => {
    return new Promise((resolve, reject) => {
        if (typeof n !== 'number') {
            reject(`Error: arg isn't a num`)
        } else {
            resolve(n ** 2)
        }
    })
}

squareNum(16)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

// 2. Write a function that takes a URL and returns a Promise that resolves with the contents of the page at that URL.

// 3. Write a function that takes an array of numbers and returns a Promise that resolves with the sum of those numbers.

// 4. Write a function that takes an array of strings and returns a Promise that resolves with the length of the longest string in the array.

// 5. Write a function that takes two numbers and returns a Promise that resolves with the result of dividing the first number by the second number. If the second number is 0, the Promise should reject with an error message.