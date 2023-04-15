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
const countriesNum = 0
const curSubtitleInfo = ''

// Filling HTML elements
h1.textContent = 'World Countries Data'
h2.textContent = `Currently, we have ${0} countries`
populationButton.textContent = 'POPULATION'
languagesButton.textContent = 'LANGUAGES'
subtitleInfo.textContent = `10 Most ${curSubtitleInfo} in the world`

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
        marginBottom: '0'
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
        cursor: 'pointer'
    },
    span: {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginBottom: '10px'
    },
    country: {
        outline: '2px dashed black',
        margin: '5px 0',
        height: '30px',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countryVisualData: {
        backgroundColor: 'orange',
        width: '100%',
        height: '30px',
        margin: '0 20px'
    },
    countrySpan: {
        width: '20%'
    },
    countryData: {
        width: '10%',
        textAlign: 'right'
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

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            // Creating additional HTML elements
            const countryItem = document.createElement('div')
            const countryName = document.createElement('span')
            const countryBar = document.createElement('div')
            const countryData = document.createElement('div')

            // Filling content
            countryItem.className = `country-${i + 1}`
            countryName.textContent = `country ${i + 1}`
            countryData.textContent = `data ${i + 1}`

            // Appending elements
            visualBlock.appendChild(countryItem)
            countryItem.appendChild(countryName)
            countryItem.appendChild(countryBar)
            countryItem.appendChild(countryData)

            // Adding style for the elements
            Object.assign(countryItem.style, styles.country)
            Object.assign(countryName.style, styles.countrySpan)
            Object.assign(countryBar.style, styles.countryVisualData)
            Object.assign(countryData.style, styles.countryData)
        }
        console.log(data)
    })
    .catch(error => console.log(error))