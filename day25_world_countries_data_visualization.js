// Creating HTML elements
const countriesAPI = 'https://restcountries.com/v2/all'
const wrapper = document.createElement('div')
const titleBlock = document.createElement('div')
const switchBlock = document.createElement('div')
const visualBlock = document.createElement('div')
const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const populationButton = document.createElement('button')
const languagesButton = document.createElement('button')
const subtitleInfo = document.createElement('span')
let isPopulationButton = true
let countriesData = null

// Filling HTML elements
h1.textContent = 'World Countries Data'
h2.textContent = `Currently, we have 0 countries`
populationButton.textContent = 'POPULATION'
languagesButton.textContent = 'LANGUAGES'
subtitleInfo.textContent = `10 Most populated countries in the world`

// Appending HTML elements
document.body.appendChild(wrapper)
wrapper.appendChild(titleBlock)
wrapper.appendChild(switchBlock)
wrapper.appendChild(visualBlock)
titleBlock.appendChild(h1)
titleBlock.appendChild(h2)
switchBlock.appendChild(populationButton)
switchBlock.appendChild(languagesButton)
switchBlock.appendChild(subtitleInfo)

// Styles
const styles = {
    wrapper: {
        // outline: '2px solid red',
    },
    titleBlock: {
        // outline: '2px dashed blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 'inset 0 -8px 10px -10px black'
    },
    switchBlock: {
        // outline: '2px dashed green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap',
        margin: '0 auto',
        // padding: '20px',
        boxShadow: 'inset 0 -8px 10px -10px black'
    },
    visualBlock: {
        boxShadow: 'inset 0 -8px 10px -10px black',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px 0'
    },
    h1: {
        fontSize: '60px',
        color: 'orange',
        margin: '0'
    },
    h2: {
        marginTop: '10px'
    },
    button: {
        width: '110px',
        height: '30px',
        backgroundColor: 'orange',
        border: 'none',
        borderRadius: '3px',
        margin: '30px 5px 20px 5px',
        textShadow: '1px 0 black',
        cursor: 'pointer',
        outline: 'none'
    },
    span: {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginBottom: '10px'
    },
    country: {
        // outline: '2px dashed black',
        margin: '5px 0',
        height: '30px',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countryVisualData: {
        // backgroundColor: 'orange',
        width: '60%',
        height: '30px',
        // margin: '0 20px'
    },
    countrySpan: {
        width: '20%'
    },
    countryData: {
        width: '10%',
        textAlign: 'right'
    },
    dataColor: {
        width: '100%',
        height: '30px',
        backgroundColor: 'orange'
    }
}

// Applying styles
Object.assign(wrapper.style, styles.wrapper)
Object.assign(titleBlock.style, styles.titleBlock)
Object.assign(switchBlock.style, styles.switchBlock)
Object.assign(visualBlock.style, styles.visualBlock)
Object.assign(h1.style, styles.h1)
Object.assign(h2.style, styles.h2)
Object.assign(populationButton.style, styles.button)
Object.assign(languagesButton.style, styles.button)
Object.assign(subtitleInfo.style, styles.span)

// Creating visual data block
for (let i = 0; i < 10; i++) {
    // Creating additional HTML elements
    const countryItem = document.createElement('div')
    const countryName = document.createElement('span')
    const countryBar = document.createElement('div')
    const countryBarProgress = document.createElement('div')
    const countryData = document.createElement('div')

    // Filling content
    countryItem.className = `country-${i + 1}`
    countryName.className = `country-name-${i + 1}`
    countryName.textContent = `country ${i + 1}`
    countryData.textContent = `data ${i + 1}`
    countryData.className = `country-data-${i + 1}`
    countryBarProgress.className = `country-data-bar-${i + 1}`

    // Appending elements
    visualBlock.appendChild(countryItem)
    countryItem.appendChild(countryName)
    countryItem.appendChild(countryBar)
    countryBar.appendChild(countryBarProgress)
    countryItem.appendChild(countryData)

    // Adding style for the elements
    Object.assign(countryItem.style, styles.country)
    Object.assign(countryName.style, styles.countrySpan)
    Object.assign(countryBar.style, styles.countryVisualData)
    Object.assign(countryBarProgress.style, styles.dataColor)
    Object.assign(countryData.style, styles.countryData)
}

// Sort function
const getTenMostCountries = (countryData, button) => {
    if (button === true) {
        // Creating additional HTML element for WORLD total data
        const worldCountryItem = document.createElement('div')
        const worldName = document.createElement('span')
        const worldBar = document.createElement('div')
        const worldBarProgress = document.createElement('div')
        const worldData = document.createElement('div')

        // Filling content
        worldCountryItem.className = `world`
        worldName.textContent = `World`
        worldData.textContent = `0`

        // Appending elements
        visualBlock.appendChild(worldCountryItem)
        worldCountryItem.appendChild(worldName)
        worldCountryItem.appendChild(worldBar)
        worldBar.appendChild(worldBarProgress)
        worldCountryItem.appendChild(worldData)

        // Adding style for the elements
        Object.assign(worldCountryItem.style, styles.country)
        Object.assign(worldName.style, styles.countrySpan)
        Object.assign(worldBar.style, styles.countryVisualData)
        Object.assign(worldBarProgress.style, styles.dataColor)
        Object.assign(worldData.style, styles.countryData)

        // 1 style rule for world item
        worldCountryItem.style.order = '-1'

        const worldPop = countryData.reduce((acc, cur) => {
            return acc + cur.population
        }, 0)

        const pop = countryData.sort((a, b) => {
            return b.population - a.population
        })

        for (let i = 0; i < 10; i++) {
            const getCountryName = document.querySelector(`.country-name-${i + 1}`)
            const getCountryData = document.querySelector(`.country-data-${i + 1}`)
            const getCountryBarProgress = document.querySelector(`.country-data-bar-${i + 1}`)
            const curDataBar = (pop[i].population / worldPop) * 100

            getCountryName.textContent = pop[i].name
            getCountryData.textContent = pop[i].population.toLocaleString().replace(/\s/g, ',')
            getCountryBarProgress.style.width = `${curDataBar}%`
            worldData.textContent = worldPop.toLocaleString().replace(/\s/g, ',')
        }
    }

    if (button === false) {
        const langCollection = []
        const langCount = []

        countriesData.forEach(country => {
            country.languages.forEach(lg => {
                langCollection.push(lg.name)
            })
        })

        const uniqueLangs = new Set(langCollection)
        for (let curLang of uniqueLangs) {
            const curLangNum = langCollection.filter(lang => lang === curLang).length
            langCount.push({ [curLang]: curLangNum })
        }

        langCount.sort((a,b) => {
            const countA = Object.values(a)[0]
            const countB = Object.values(b)[0]
            return countB - countA
        })

        const tenLangs = langCount.slice(0, 10)

        for (let i = 0; i < 10; i++) {
            const getCountryName = document.querySelector(`.country-name-${i + 1}`)
            const getCountryData = document.querySelector(`.country-data-${i + 1}`)
            const getCountryBarProgress = document.querySelector(`.country-data-bar-${i + 1}`)
            const curLangData = Object.entries(tenLangs[i])[0]
            const biggerLangData = Object.entries(tenLangs[0])[0][1]
            const curDataBar = Math.round((curLangData[1] / biggerLangData) * 100)

            getCountryName.textContent = curLangData[0]
            getCountryData.textContent = curLangData[1]
            getCountryBarProgress.style.width = `${curDataBar}%`
            // console.log(tenLangs[0])
            // console.log(Math.round((curLangData[1] / biggerLangData) * 100))
        }
    }
}

// Getting data from API
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        // console.log(data.length)
        getTenMostCountries(data, isPopulationButton)
        h2.textContent = `Currently, we have ${data.length} countries`
        countriesData = data
        console.log(data)
    })
    .catch(error => console.error(error))

// Adding eventListener to buttons
languagesButton.addEventListener('click', () => {
    // h2.textContent = `10 Most Spoken languages in the world`
    subtitleInfo.textContent = `10 Most Spoken languages in the world`
    isPopulationButton = false
    document.querySelector('.world').style.display = 'none'
    getTenMostCountries(countriesData, isPopulationButton)
}) 