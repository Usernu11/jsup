const bodyElement = document.querySelector('body') as HTMLBodyElement | null
const textElement = document.querySelector('.text') as HTMLDivElement | null
const text = '30 Days Of JavaScript Challenge 2023 Bohdan Lavrentiev'
const containerElement = document.querySelector('.container') as HTMLDivElement | null
const fonts = ['Comfortaa', 'Iceland', 'Josefin Sans', 'Kanit', 'Prompt', 'Righteous', 'Roboto Mono']

if (textElement) {
  textElement.textContent = text ?? ''
}

const randomHexColor = (): void => {
  const lettersArray = (textElement?.textContent ?? '').split('')
  if (textElement) {
    textElement.remove() // remove text to make new one with colors
  }

  for (let i = 0; i < lettersArray.length + 1; i++) {
    const newLetter = document.createElement('span')
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    if (bodyElement) {
      bodyElement.style.backgroundColor = `#${randomColor}` // change bg color
    }

    if (containerElement) {
      containerElement.appendChild(newLetter)
      containerElement.style.fontFamily = fonts[Math.floor(Math.random() * 6)]
    }

    if (newLetter) {
      newLetter.style.color = `#${randomColor}`
      newLetter.style.fontSize = '140px'
      newLetter.style.opacity = '0'
      newLetter.textContent = lettersArray?.[i] || ''

      const opacityInterval = getRandomOpacityInterval()
      newLetter.style.transition = `opacity ${opacityInterval}ms`
      setTimeout(() => {
        newLetter.style.opacity = '1'
      }, 0)
    }
  }
}

const getRandomOpacityInterval = (): number => {
  // Generate a random opacity change interval between 1 and 3 seconds
  return Math.floor(Math.random() * 3000) + 1000
}

randomHexColor()