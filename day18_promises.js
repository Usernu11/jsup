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
fetchData(catsAPI)

// plan ↑
// 1. print the metric weight param in console log
// 2. split the str
// 3. calculate the average weight
// 4. do it for all cats
// 5. beautify the results, using cat names

// ex2
console.warn('ex -> 2')

// ex3
console.warn('ex -> 3')



console.groupEnd('Level 3')