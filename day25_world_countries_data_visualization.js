// Creating HTML elements
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
        alignItems: 'center'
    },
    switchBlock: {
        // outline: '2px dashed green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
        flexWrap: 'wrap',
        margin: '0 auto',
        padding: '20px'
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
        margin: '15px 5px',
        textShadow: '1px 0 black',
        cursor: 'pointer'
    },
    span: {
        display: 'block',
        width: '100%',
        textAlign: 'center'
    }
}

// Applying styles
Object.assign(wrapper.style, styles.wrapper)
Object.assign(titleBlock.style, styles.titleBlock)
Object.assign(switchBlock.style, styles.switchBlock)
Object.assign(h1.style, styles.h1)
Object.assign(h2.style, styles.h2)
Object.assign(populationButton.style, styles.button)
Object.assign(languagesButton.style, styles.button)
Object.assign(subtitleInfo.style, styles.span)