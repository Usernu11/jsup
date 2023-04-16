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

// Appending HTML elements
document.body.appendChild(header)
header.appendChild(container)
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

// Styles for HTML elements
// Applying styles for HTML elements

// Filling HTML elements content
title.textContent = 'world countries list'
subtitle.textContent = 'total numbers of countries:'
startingWordButton.textContent = 'starting word'
anyWordButton.textContent = 'search with any word'
input.placeholder = 'search country ...'