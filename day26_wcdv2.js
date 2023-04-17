// Creating HTML elements
const container = document.createElement('div')
const header = document.createElement('div')
const title = document.createElement('h1')
const subtitle = document.createElement('span')
const searchInfo = document.createElement('span')
const buttonWrapper = document.createElement('div')
const startingWordButton = document.createElement('button')
const anyWordButton = document.createElement('button')
const sortButton = document.createElement('button')
const inputWrapper = document.createElement('div')
const input = document.createElement('input')
const searchIcon = document.createElement('div')
const getBody = document.querySelector('body')
const videoBg = document.createElement('video')
const videoBgSource = document.createElement('source')

// Appending HTML elements
document.body.appendChild(header)
header.appendChild(container)
header.appendChild(videoBg)
videoBg.appendChild(videoBgSource)
container.appendChild(title)
container.appendChild(subtitle)
container.appendChild(searchInfo)
container.appendChild(buttonWrapper)
buttonWrapper.appendChild(startingWordButton)
buttonWrapper.appendChild(anyWordButton)
buttonWrapper.appendChild(sortButton)
container.appendChild(inputWrapper)
inputWrapper.appendChild(input)
inputWrapper.appendChild(searchIcon)

// Filling HTML elements content
title.textContent = 'world countries list'
subtitle.textContent = 'total numbers of countries:'
startingWordButton.textContent = 'starting word'
anyWordButton.textContent = 'search with any word'
input.placeholder = 'search country ...'
videoBg.autoplay = 'true'
videoBg.loop = 'true'
videoBgSource.src = 'img/Rotating-Digital-Earth.mp4'
videoBgSource.type = 'video/mp4'

// Styles for HTML elements
const styles = {
    container: {
        outline: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh'
    },
    header: {
        height: '60vh'
    },
    body: {
        margin: '0'
    },
    title: {
        fontSize: '60px',
        letterSpacing: '14px',
        textShadow: '1px 1px white',
        color: 'white',
        marginBottom: '0',
        textTransform: 'uppercase',
        textShadow: 'blueViolet 0px 0px 5px, blueViolet 0px 0px 10px, blueViolet 0px 0px 15px, blueViolet 0px 0px 20px, blueViolet 0px 0px 30px, blueViolet 0px 0px 40px, blueViolet 0px 0px 50px, blueViolet 0px 0px 75px, 2px 2px 2px blueViolet'
    },
    videoBg: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '60%',
        objectFit: 'cover',
        zIndex: '-1'
    },
    subtitle: {
        color: 'white',
        fontSize: '30px',
        marginBottom: '5px',
        textTransform: 'capitalize'
    },
    buttonWrapper: {
        width: '23%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px'
    },
    button: {
        backgroundColor: 'blueViolet',
        color: 'white',
        fontSize: '16px',
        padding: '10px 14px',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '3px'
    },
    sortButton: {
        width: '40px',
        backgroundImage: 'url("img/descending.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%'
    },
    searchInfo: {
        height: '30px',
        width: '30%',
        marginBottom: '20px',
        color: 'white'
    },
    inputWrapper: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        height: '30px',
        width: '70%',
        outline: 'none',
        borderRadius: '20px',
        padding: '5px 20px',
        fontSize: '18px',
        letterSpacing: '2px',
        border: '2px solid blueViolet',
        textAlign: 'center'
    },
    searchIcon: {
        backgroundImage: 'url("img/magnifying-glass.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%',
        width: '7%'
    }
}

// Applying styles for HTML elements
Object.assign(container.style, styles.container)
Object.assign(header.style, styles.header)
Object.assign(getBody.style, styles.body)
Object.assign(title.style, styles.title)
Object.assign(videoBg.style, styles.videoBg)
Object.assign(subtitle.style, styles.subtitle)
Object.assign(searchInfo.style, styles.searchInfo)
Object.assign(buttonWrapper.style, styles.buttonWrapper)
Object.assign(startingWordButton.style, styles.button)
Object.assign(anyWordButton.style, styles.button)
Object.assign(sortButton.style, styles.button)
Object.assign(sortButton.style, styles.sortButton)
Object.assign(inputWrapper.style, styles.inputWrapper)
Object.assign(input.style, styles.input)
Object.assign(searchIcon.style, styles.searchIcon)