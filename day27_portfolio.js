const qualificationsBlock = document.querySelector('.qualifications')
const life = ['👨‍💻 developer', '⚡ motivator', '🏐 volleyball player', '🎨 charcoal artist']
const skills = ['JavaScript', 'HTML/CSS3', 'ES6', 'Sass', 'mySQL']
const signBlock = document.createElement('div')
const lifeBlock = document.createElement('div')
const getTechnologies = document.querySelector('.technologies')

// Styles
const styles = {
    qualifications: {
        width: '94%',
        height: '80px',
        backgroundColor: 'LemonChiffon',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 22px'
    },
    sign: {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25px'
    },
    hobbie: {
        width: 'fit-content',
        height: '40px',
        textTransform: 'capitalize',
        fontSize: '35px',
        display: 'flex',
        padding: '0 10px',
        alignItems: 'center',
        marginLeft: '-40px',
        opacity: '.1'
    },
    skills: {
        opacity: '1',
        color: 'black',
        fontWeight: '700',
        fontSize: '35px'
    }
}

// Joining new HTML elements
qualificationsBlock.appendChild(signBlock)
qualificationsBlock.appendChild(lifeBlock)

// Applying styles
Object.assign(qualificationsBlock.style, styles.qualifications)
Object.assign(signBlock.style, styles.sign)
Object.assign(lifeBlock.style, styles.hobbie)
Object.assign(getTechnologies.style, styles.skills)

// Move skill and change content
// The hobbies movement 💚
let i = 0
let startingMargin = -40
let startingOpacity = .1
let isHobbieChanges = false     // setIntervals synchronizer

const changeHobbie = () => {
    const currentSign = life[i].split(' ').slice(0, 1)
    const currentText = life[i]
        .split(' ')
        .slice(1, life[i].length)
        .join(' ')

    signBlock.textContent = currentSign
    lifeBlock.textContent = currentText
    isHobbieChanges = true
    startingOpacity = .1
    startingMargin = -40

    i++

    if (i === life.length) {
        i = 0
    }
}

const hobbieMovement = () => {  
    if (startingMargin !== 50) {
        lifeBlock.style.marginLeft = `${startingMargin}px`
        startingMargin++
    }

    if (startingOpacity <= 1 && isHobbieChanges === true) {
        lifeBlock.style.opacity = startingOpacity.toFixed(1)
        startingOpacity += .01
    } else {
        isHobbieChanges = false
    }
}

setInterval(changeHobbie, 4000)
setInterval(hobbieMovement, 40)

// Appearing for technologies 💠
let skillIndex = 0
let startedFontOpacity = .1
let isSkillChanged = false      // setIntervals synchronizer

const changeSkill = () => {
    const curSkill = skills[skillIndex]

    if (curSkill.toLowerCase() == 'javascript') {
        getTechnologies.style.color = 'yellow'
    }
    if (curSkill.toLowerCase() == 'html/css3') {
        getTechnologies.style.color = 'Navy'
    }
    if (curSkill.toLowerCase() == 'sass') {
        getTechnologies.style.color = 'HotPink'
    }
    if (curSkill.toLowerCase() == 'mysql') {
        getTechnologies.style.color = 'MediumSeaGreen'
    }
    if (curSkill.toLowerCase() == 'es6') {
        getTechnologies.style.color = 'DarkOrange'
    }

    getTechnologies.textContent = curSkill
    isSkillChanged = true
    startedFontOpacity = .1

    if (skillIndex < skills.length - 1) {
        skillIndex++
    } else {
        skillIndex = 0
    }
}

const changeFontOpacity = () => {
    getTechnologies.style.opacity = startedFontOpacity
    if (startedFontOpacity < .9 && isSkillChanged === true) {
        startedFontOpacity += .1
    } else {
        isSkillChanged = false
    }
}

setInterval(changeSkill, 2000)
setInterval(changeFontOpacity, 100)