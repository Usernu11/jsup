const qualificationsBlock = document.querySelector('.qualifications')
const life = ['👨‍💻 developer', '⚡ motivator', '🏐 volleyball player', '🎨 charcoal artist']
const skills = ['JavaScript', 'HTML/CSS3', 'ES6', 'Sass', 'mySQL']
const signBlock = document.createElement('div')
const lifeBLock = document.createElement('div')
const getTechnologies = document.querySelector('.technologies')

// Styles
const styles = {
    qualifications: {
        width: '100%',
        height: '80px',
        // outline: '2px solid red',
        backgroundColor: 'LemonChiffon',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 22px'
    },
    sign: {
        width: '40px',
        height: '40px',
        // outline: '2px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25px'
    },
    hobbie: {
        width: 'fit-content',
        height: '40px',
        // outline: '2px solid blue',
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
qualificationsBlock.appendChild(lifeBLock)

// Applying styles
Object.assign(qualificationsBlock.style, styles.qualifications)
Object.assign(signBlock.style, styles.sign)
Object.assign(lifeBLock.style, styles.hobbie)
Object.assign(getTechnologies.style, styles.skills)

// Move skill and change content
// for (let i = 0; i < skills.length; i++) {
//     const currentSign = skills[i].split(' ').slice(0, 1)
//     const currentText = skills[i].split(' ').slice(1, skills[i].length).join(' ')

//     signBlock.textContent = currentSign
//     skillBlock.textContent = currentText
// }

// setInterval(() => {


//      else {
//         i = 0
//     }

//     i++
// }, 4000)

// The movement bug
// let i = 0
// let marginMove = -40
// let opacityChange = .1

// const changeSkill = setInterval(() => {
//     const currentSign = skills[i].split(' ').slice(0, 1)
//     const currentText = skills[i]
//         .split(' ')
//         .slice(1, skills[i].length)
//         .join(' ')

//     signBlock.textContent = currentSign
//     skillBlock.textContent = currentText
    
//     i++
    
//     if (i === skills.length) {
//         i = 0
//     }

// }, 4000)

// const skillMovement = setInterval(() => {  
//     if (marginMove !== 50) {
//         skillBlock.style.marginLeft = `${marginMove}px`
//         marginMove++
//     } else {
//         clearInterval(changeSkill)
//         marginMove = -40
//         changeSkill()
//     }

//     if (opacityChange <= 1) {
//         skillBlock.style.opacity = opacityChange.toFixed(1)
//         opacityChange += .01
//     } else {
//         opacityChange = .1
//     }
// }, 40)

// Appearing for technologies 🎾
// 1. try to make 2 functions
// 2. then using conditionals use intervals
let skillIndex = 0
let startedFontOpacity = .1
let isSkillChanged = false

const changeSkill = () => {
    const curSkill = skills[skillIndex]
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