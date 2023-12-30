// get elements
const getBodyEl = document.querySelector('body')

// header
const headerEl = document.createElement('header')
const h1El = document.createElement('h1')
const h2El = document.createElement('h2')
const h3El = document.createElement('h3')

// input
const inputEl = document.createElement('input')
const btnWrapper = document.createElement('div')
const btnNameEl = document.createElement('button')
const btnCapitalEl = document.createElement('button')
const btnPopulationEl = document.createElement('button')
// const btnStatEl = document.createElement('button')

// countries
const countriesWrapper = document.createElement('div')

// content
const greetText = 'World Countries Data'
const totalCountries = 'Curentrly we have ⭕ counties'
const inputPlaceholderText = 'Search countries . . .'
const btnNameText = 'Name'
const btnCapitalText = 'Capital'
const btnPopuationText = 'Population'
const btnStatText = '📊'

// countries API
const countriesAPI = 'https://restcountries.com/v2/all'

// local countries array with essential info
const countriesArray = []
let copyCountriesArray = null
let countriesNameFilter = false
let countriesPopulationFilter = false
let countriesCapitalFilter = false
let keywords = null

// content assign
h1El.textContent = greetText
h2El.textContent = totalCountries
inputEl.placeholder = inputPlaceholderText
btnNameEl.textContent = btnNameText
btnCapitalEl.textContent = btnCapitalText
btnPopulationEl.textContent = btnPopuationText
// btnStatEl.textContent = btnStatText

// connections
getBodyEl.appendChild(headerEl)
headerEl.appendChild(h1El)
headerEl.appendChild(h2El)
headerEl.appendChild(h3El)
headerEl.appendChild(inputEl)
headerEl.appendChild(btnWrapper)
btnWrapper.appendChild(btnNameEl)
btnWrapper.appendChild(btnCapitalEl)
btnWrapper.appendChild(btnPopulationEl)
// btnWrapper.appendChild(btnStatEl)
getBodyEl.appendChild(countriesWrapper)

// classes
btnWrapper.classList.add('buttons')
btnNameEl.classList.add('buttons__name')
btnCapitalEl.classList.add('buttons__capital')
btnPopulationEl.classList.add('buttons__population')
// btnStatEl.classList.add('buttons__stat')
countriesWrapper.classList.add('countries-wrapper')

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const countriesLength = data.length
        h2El.textContent = `Curentrly we have ${countriesLength} counties`

        for (let i = 0; i < countriesLength; i++) {
            const allCurLangs = []

            data[i].languages.forEach(lang => {
                allCurLangs.push(lang.name)
            })

            countriesArray.push({
                name: data[i].name,
                capital: data[i].capital,
                languages: allCurLangs,
                population: data[i].population,
                flag: data[i].flag
            })
        }

        copyCountriesArray = JSON.parse(JSON.stringify(countriesArray))

        renderCountriesCards()
    })
    .catch(error => console.error(error))

// find all cards and clear them
const removeCards = () => {
    const getAllCountryCards = document.querySelectorAll('.country-card')
    getAllCountryCards.forEach(card => {
        card.remove()
    })
}

// A function which render countries cards
const renderCountriesCards = () => {
    let cardsNumber = copyCountriesArray.length

    for (let i = 0; i < cardsNumber; i++) {
        // creating elements
        const countryCard = document.createElement('div')
        const countryFlag = document.createElement('div')
        const countryName = document.createElement('div')
        const countryInfo = document.createElement('div')
        const countryCapital = document.createElement('div')
        const countryLanguages = document.createElement('div')

        // appending elements
        countriesWrapper.appendChild(countryCard)
        countryCard.appendChild(countryFlag)
        countryCard.appendChild(countryName)
        countryCard.appendChild(countryInfo)
        countryInfo.appendChild(countryCapital)
        countryInfo.appendChild(countryLanguages)

        // style and content
        countryFlag.style.background = `url(${copyCountriesArray[i].flag}) no-repeat center`
        countryFlag.style.backgroundSize = `contain`
        countryName.textContent = copyCountriesArray[i].name
        countryCapital.textContent = `Capital: ${copyCountriesArray[i].capital}`
        countryLanguages.textContent = `Languages: ${copyCountriesArray[i].languages.join(', ')}`

        const countryPopulation = document.createElement('div') // the population should be the last
        countryInfo.appendChild(countryPopulation) // the population should be the last

        const populationNum = copyCountriesArray[i].population
        const populationNumSpaced = populationNum.toLocaleString()
        const populationNumFormated = populationNumSpaced.replace(/\s/g, ',')
        countryPopulation.textContent = `Population: ${populationNumFormated}` // the population should be the last

        // classes
        countryCard.classList.add('country-card')
        countryFlag.classList.add('country-card__flag')
        countryName.classList.add('country-card__name')
        countryInfo.classList.add('country-card__info')
        countryCapital.classList.add('country-card__info-cap')
        countryPopulation.classList.add('country-card__info-pop')
        countryLanguages.classList.add('country-card__info-lang')
    }
}

// A function writed for clean code
const clearAndRenderCountries = (action) => {
    if (action === 'name') {
        copyCountriesArray.reverse()
        removeCards()
        renderCountriesCards()
    } else {        // remove dublicate cards render
        removeCards()
        renderCountriesCards()
    }

    if (action === 'cap') {
        if (!countriesCapitalFilter) {
            copyCountriesArray.sort((a, b) => {
                if (a.capital && b.capital) {
                    return a.capital.localeCompare(b.capital);
                } else {
                    // avoiding errors when there is no capital (Antarctica)
                    return 0
                }
            })

            removeCards()
            renderCountriesCards()
            // countriesCapitalFilter = true
        }

        if (countriesCapitalFilter) {
            copyCountriesArray.sort((a, b) => {
                if (a.capital && b.capital) {
                    return b.capital.localeCompare(a.capital);
                } else {
                    // avoiding errors when there is no capital (Antarctica)
                    return 0
                }
            })

            removeCards()
            renderCountriesCards()
        }
    }

    if (action === 'pop') {
        if (!countriesPopulationFilter) {
            copyCountriesArray.sort((a, b) => {
                return b.population - a.population
            })

            removeCards()
            renderCountriesCards()
            countriesPopulationFilter = true
        } else {
            copyCountriesArray.sort((a, b) => {
                return a.population - b.population
            })

            removeCards()
            renderCountriesCards()
            countriesPopulationFilter = false
        }
    }
}

btnNameEl.addEventListener('click', async () => {
    if (copyCountriesArray.length > 1) {    // all countries succesfully loaded
        if (!countriesNameFilter) {
            btnNameEl.textContent = `Name ↑`
            countriesNameFilter = true
        } else {
            btnNameEl.textContent = `Name ↓`
            countriesNameFilter = false
        }
        clearAndRenderCountries('name')
    }
})

btnCapitalEl.addEventListener('click', async () => {
    if (copyCountriesArray.length > 1) {    // all countries succesfully loaded
        if (!countriesCapitalFilter) {
            btnCapitalEl.textContent = `Capital ↑`
            countriesCapitalFilter = true
            clearAndRenderCountries('cap')
        } else {
            btnCapitalEl.textContent = `Capital ↓`
            countriesCapitalFilter = false
            clearAndRenderCountries('cap')
        }
    }
})

btnPopulationEl.addEventListener('click', async () => {
    if (copyCountriesArray.length > 1) {    // all countries succesfully loaded
        if (!countriesPopulationFilter) {
            clearAndRenderCountries('pop')
            btnPopulationEl.textContent = `Population ↓`
            countriesPopulationFilter = true
        } else {
            clearAndRenderCountries('pop')
            btnPopulationEl.textContent = `Population ↑`
            countriesPopulationFilter = false
        }
    }
})

inputEl.addEventListener('input', key => {
    keywords = inputEl.value
    copyCountriesArray = countriesArray.filter(country =>
        country.name.toLowerCase().includes(keywords.toLowerCase())
    )

    if (inputEl.value === '') {
        copyCountriesArray = countriesArray
        h2El.textContent = `Curentrly we have ${copyCountriesArray.length} counties`
        renderCountriesCards(copyCountriesArray.length)
    }

    if (inputEl.value !== '') {
        h2El.textContent = `Curentrly we have ${copyCountriesArray.length} counties`
        renderCountriesCards(copyCountriesArray.length)
    }

    clearAndRenderCountries(keywords)
})