import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

// 31.05.2022
// level 1
const emptyArray = []
const wishes = ['peace', 'Arizona', 'volleyball', 'hookah', 'javascript']
console.log(`first item: ${wishes[0]}\nmiddle item: ${wishes[wishes.length - 3]}\nlast item: ${wishes[wishes.length - 1]}`)
const mixedDataTypes = ['word', 16, true, null, ['another one array'], undefined]
console.log(mixedDataTypes.length)
const itCompanies = ['Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon']
console.log(itCompanies)
const splitter = itCompanies.toString().replace(/,/g, '').split(' ')
console.log(splitter.includes('and'))
console.log(splitter.indexOf('and'))
const firstPartArray = splitter.slice(0, 6)
const secondPartArray = splitter.slice(7, 8)
console.log(firstPartArray)
console.log(secondPartArray)
const fullItCompanies = firstPartArray.concat(secondPartArray) 
console.log(fullItCompanies)
console.log(`The number of companies: ${fullItCompanies.length}`)
// 9
console.log(`The first company is: ${fullItCompanies[0]}\nThe middle company is: ${fullItCompanies[Math.floor(fullItCompanies.length / 2)]}\nThe last company is: ${fullItCompanies[fullItCompanies.length - 1]}`)
// console.log(splitter)
console.log(`IT companies:\n1) ${fullItCompanies[0]}\n2) ${fullItCompanies[1]}\n3) ${fullItCompanies[2]}\n4) ${fullItCompanies[3]}\n5) ${fullItCompanies[4]}\n6) ${fullItCompanies[5]}\n7) ${fullItCompanies[6]}`)
console.log(fullItCompanies.toString().toUpperCase().split(' '))
console.log((itCompanies.toString().toUpperCase().replace(/,/g, '').replace(/and /gi,'')).split(' '))
const upperCaseComp = (itCompanies.toString().toUpperCase().replace(/,/g, '').replace(/and /gi,'')).split(' ')
console.log(`IT companies:\n
1 - ${upperCaseComp[0]}
2 - ${upperCaseComp[1]}
3 - ${upperCaseComp[2]}
4 - ${upperCaseComp[3]}
5 - ${upperCaseComp[4]}
6 - ${upperCaseComp[5]}
7 - ${upperCaseComp[6]}
\n`)
// 02.06.2022
const newComp = ['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.']
console.log(newComp)
console.log(newComp.toString())
let arrayeblist = newComp.toString().replace(/,/g, '').split(' ')
console.log(arrayeblist.includes('Apple'))
let com = 'Google'
arrayeblist.includes(com)
    ? console.log(`The "${com}" company is exist. ✔`)
    : console.log(`The "${com}" company isn't found. ❌`)

console.log(arrayeblist)
console.log(`the lenght of the array is ${arrayeblist.length}`)


const twoOcomp = []
arrayeblist[0].toString().match(/o/gi) !== null && arrayeblist[0].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[0]))
    : console.log('')

arrayeblist[1].toString().match(/o/gi) !== null && arrayeblist[1].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[1]))
    : console.log('')

arrayeblist[2].toString().match(/o/gi) !== null && arrayeblist[2].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[2]))
    : console.log('')

arrayeblist[3].toString().match(/o/gi) !== null && arrayeblist[3].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[3]))
    : console.log()

arrayeblist[4].toString().match(/o/gi) !== null && arrayeblist[4].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[4]))
    : console.log()

arrayeblist[5].toString().match(/o/gi) !== null && arrayeblist[5].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[5]))
    : console.log()

arrayeblist[6].toString().match(/o/gi) !== null && arrayeblist[6].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[6]))
    : console.log()

arrayeblist[7].toString().match(/o/gi) !== null && arrayeblist[7].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[7]))
    : console.log()

arrayeblist[8].toString().match(/o/gi) !== null && arrayeblist[8].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[8]))
    : console.log()

arrayeblist[9].toString().match(/o/gi) !== null && arrayeblist[9].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[9]))
    : console.log()

arrayeblist[10].toString().match(/o/gi) !== null && arrayeblist[10].toString().match(/o/gi).length >= 2
    ? console.log(twoOcomp.push(arrayeblist[10]))
    : console.log()

console.log(twoOcomp)
console.log(arrayeblist.sort())
console.log(arrayeblist.sort().reverse())
console.log(arrayeblist.reverse().pop(), arrayeblist.pop(), arrayeblist.pop())
console.log(arrayeblist.shift(), arrayeblist.shift(), arrayeblist.shift())
console.log(arrayeblist.slice(Math.round(arrayeblist.length / 2), Math.round(arrayeblist.length / 2) + 1))
console.log(arrayeblist)
console.log(arrayeblist.shift())
console.log(arrayeblist.splice(Math.floor(arrayeblist.length / 2), 1))
console.log(arrayeblist.pop())
console.log(twoOcomp.splice())

// level 2
console.log(countries, webTechs) // added import
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let remover = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
let words = text.replace(remover, '')
console.log(words)
console.log(`the sentence above ↑ has ${words.split(' ').length} words`)
console.log()
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// 03.06.2022
console.log(shoppingCart)
shoppingCart.includes('Meat') === true
    ? console.log(`The item "Meat" has been already added.`)
    : shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.includes('Sugar') === true
    ? console.log(`The item "Sugar" has been already added.`)
    : shoppingCart.push('Sugar')
console.log(shoppingCart)

// let isHoneyAllergic = prompt('write "YES" if you have allergic to honey 🍯')
// let isHoneyAllergicTLC = isHoneyAllergic.toLowerCase()
// isHoneyAllergicTLC === 'yes'
//     ? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
//     : console.log(`You don't have an allergic to honey ✅`)
// console.log(shoppingCart)
// done ↑ ✅

console.log(shoppingCart.toString().replace((/Tea/gi), 'Green Tea').split(','))

countries.includes('Ethiopia') === true
    ? console.log('ETHIOPIA')
    : countries.push('Ethiopia')
console.log(countries)

webTechs.includes('Sass') === true
    ? console.log(`Sass is a CSS preprocess`)
    : webTechs.push('Sass')
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())
console.log(`The min age is ${Math.min(...ages)}\nThe max age is ${Math.max(...ages)}`)
console.log(`The mediane age is ${Math.round(ages[ages.sort().length / 2])}`)
let average = Math.round((ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length)
console.log(`The average age is ${average}`)
console.log(`The range of the ages is ${Math.max(...ages) - Math.min(...ages)}`)
let minAverage = Math.abs(Math.min(...ages) - average)
let maxAverage = Math.abs(Math.max(...ages) - average)
console.log(`The min average is ${minAverage}\nThe max average is ${maxAverage}`)
minAverage === maxAverage
    ? console.log('the min average is EQUAL to max average')
    : minAverage < maxAverage
        ? console.log(`the min average is LESS than max average to ${Math.abs(minAverage - maxAverage)}`)
        : console.log(`the max average is LESS than min average to ${Math.abs(minAverage - maxAverage)}`)

const countriesTwo = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

export {countriesTwo}

console.table(countriesTwo.slice(0, 10))
console.log(`The middle country of the countries' list is ${countriesTwo.slice(Math.round(countriesTwo.length / 2), Math.round(countriesTwo.length / 2) + 1)}.`)
console.log(`The middle countries of the list are:\n${countriesTwo.slice(Math.floor(countriesTwo.length / 2), Math.ceil(countriesTwo.length / 2) + 1)} 😎`)

let firstCountries = []
let secondCountries = []
countriesTwo.length % 2 === 0
    ? [firstCountries = firstCountries.concat(countriesTwo.slice(0, (Math.round(countriesTwo.length / 2)))),
        secondCountries = secondCountries.concat(countriesTwo.slice(Math.round(countriesTwo.length / 2)))]
    : [countriesTwo.unshift('🍕'), firstCountries = firstCountries.concat(countriesTwo.slice(0, (Math.round(countriesTwo.length / 2)))),
    secondCountries = secondCountries.concat(countriesTwo.slice(Math.round(countriesTwo.length / 2)))]
console.log(firstCountries)
console.log(secondCountries)