const qualificationsBlock = document.querySelector('.qualifications')
const skills = ['👨‍💻 developer', '⚡ motivator', '🏐 volleyball player', '🎨 charcoal artist']
const signBlock = document.createElement('div')
const skillBlock = document.createElement('div')

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
    skill: {
        width: 'fit-content',
        height: '40px',
        // outline: '2px solid blue',
        textTransform: 'capitalize',
        fontSize: '35px',
        display: 'flex',
        padding: '0 10px',
        alignItems: 'center',
        marginLeft: '-40px',
        opacity: .1
    }
}

// Joining new HTML elements
qualificationsBlock.appendChild(signBlock)
qualificationsBlock.appendChild(skillBlock)

// Applying styles
Object.assign(qualificationsBlock.style, styles.qualifications)
Object.assign(signBlock.style, styles.sign)
Object.assign(skillBlock.style, styles.skill)

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

// The movement
let i = 0
let marginMove = -40
let opacityChange = .1

const changeSkill = setInterval(() => {
    const currentSign = skills[i].split(' ').slice(0, 1)
    const currentText = skills[i]
        .split(' ')
        .slice(1, skills[i].length)
        .join(' ')

    signBlock.textContent = currentSign
    skillBlock.textContent = currentText
    
    i++
    
    if (i === skills.length) {
        i = 0
    }

}, 4000)

const skillMovement = setInterval(() => {  
    if (marginMove !== 50) {
        skillBlock.style.marginLeft = `${marginMove}px`
        marginMove++
    } else {
        clearInterval(changeSkill)
        marginMove = -40
        changeSkill()
    }

    if (opacityChange <= 1) {
        skillBlock.style.opacity = opacityChange.toFixed(1)
        opacityChange += .01
    } else {
        opacityChange = .1
    }
}, 40)