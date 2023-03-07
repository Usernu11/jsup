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
        let sortedCountries = countries.sort((a,b) => { // 1
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

        let langObjects = []
        countries.forEach(el => {
            langObjects.push(el.languages)
        })
        // console.log(countries[0].languages[0].name) // Pashto
        console.log(langObjects)

        let languages = []
        langObjects.forEach(el => {
            el.reduce((acc, cur) => {
                languages.push(cur.name)
            })
        })
        console.log(languages)

        const uniqueLanguages = new Set(languages)
        const result = Array.from(uniqueLanguages)

        return result.forEach(el => console.log(`🙂 ${el}`))
    } catch (err) {
        console.error(err)
    }
}
getOffLangs(countriesAPI) // <- put here 'countriesAPI'

console.clear()

console.groupEnd('Level 3')