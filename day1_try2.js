// ------------------------------------------------------ REPEAT 💾 22.05.2022 ------------------------------------------------------------------
//d1

// comments can make code readable

// Welcome to 30DaysOfJavaScript

/* comments can make code readable,
 easy to reuse and informative */

let str = ''
let bln = true
let var1 = undefined
let var2 = null
 
let var3 = 'new str'
let var4 = 16
let var5 = '718'
let var6 = false
 
let firstName = 'Bohdan'
let secondName = 'Lavrentiev'
let isMarried = false
let country = 'Ukraine'
let age = 25
 

// it's my experiment ↓ and it's works
let fiName = 'Bohdanius',
     secName = 'Lavren',
     isMarri = false,
     myCountry = 'USA',
     myYO = 718

let fName = 'Oscar'; sName = 'Grand'; isMarri = true; currentCountry = 'England'; yo = 16
// continue task ↓ 
let myAge = 27
let yourAge = 16
 
console.log(`I'm ${myAge} years old.`)
console.log(`You're ${yourAge} years old.`)
// console.log(fiName, secName, isMarri, currentCountry, yo)
// console.log(fName, secName, isMarri, myCountry, myYO)
// end of d1 ------------------------------------------------------------------------------------------------------------------------------------
 
// d2
// lvl 1
 
let challenge = '30 Days Of JavaScript';
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let str2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(str2.indexOf('b'))
console.log(str2.lastIndexOf('b'))
console.log(str2.search('because'))
let challengeSpace = ' 30 Days Of JavaScript '
console.log(challengeSpace.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
let pattern = /a/g
console.log(challenge.match(pattern))
let str3 = '30 Days of '
let str4 = 'JavaScript'
console.log(str3.concat(str4))
console.log(challenge.repeat(2))

//  d2-lvl2
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
let numInStr = challenge.substring(0,2)
console.log(numInStr)
let numFromStr = +numInStr
console.log(numFromStr)
console.log(typeof(numInStr) == typeof(numFromStr))
console.log(typeof(+numInStr) == typeof(numFromStr))
console.log(parseFloat('9.8') == 10)
console.log(Math.ceil(parseFloat('9.8')) == 10)
let py = 'Python'
let ja = 'Jargon'
let onPattern = /on/g
console.log(py.match(onPattern), ja.match(onPattern))
let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))
console.log(Math.floor(Math.random() * 101))
console.log((Math.floor(Math.random() * 51)) + 50)
console.log(Math.floor(Math.random() * 256))

// I don't understand a 10 exercise. ❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓ 

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')
console.log(str2.indexOf('because'))
console.log(str2.lastIndexOf('because'))
console.log(str2.substring(str2.indexOf('because'), str2.lastIndexOf('because')))

// d2-lvl3
let str5 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let wordPattern = /love/gi
console.log(str5.match(wordPattern))
console.log(str2.match(/because/g))
const str6 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let signCleaner = /[@#$%&;]/g
console.log(str6.replace(signCleaner, ''))
let textReport = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numFinder = /\d+/g
console.log(textReport)
console.log(textReport.match(numFinder))
let incomeList = textReport.match(numFinder)
let sallary = parseFloat(incomeList[0])
let bonus = parseFloat(incomeList[1])
let onlineCourses = parseFloat(incomeList[2])
// console.log(sallary)
// console.log(bonus)
// console.log(onlineCourses)
let totalAnnual = (sallary * 12) + bonus + (onlineCourses * 12)
console.log(`The total annual is: ${totalAnnual} euro.`)
// end of d2 ------------------------------------------------------------------------------------------------------------------------------------