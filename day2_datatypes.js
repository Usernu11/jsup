// let textVarible = 'This is a simple string (text) varible';
// let booleanVariable = true;
// let undefinedVariable = undefined;
// let nullVaribale = null;
// let firstVariable;
// let secondVariable;
// let thirdariable;
// let fourthVariable;

// let varFirst = 1;
// let varSec = 'second';
// let varTrird = true;
// let varFourth = null;

// let fName = 'Bohdan'; let lName = 'Lavrentiev'; let years = 25; let isSinle = true; let coutry = 'Ukraine';

// let myAge = 16;
// let yourAge = 30;
// let myRealAge = yourAge - myAge + 11;

// console.log("I'm ", myRealAge, " years old.");
// console.log("You are ", yourAge, " years old.");

// day 2 - level 1
// let challenge = '30 Days Of JavaScript';
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substr(3,4));
// console.log(challenge.substring(3,7));
// console.log(challenge.replace('30 ',''));
// console.log(challenge.includes('Script'));
// console.log(challenge.split());
// console.log(challenge.split(' '));
// let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(brands.split(','))
// console.log(challenge.replace('JavaScript','HuyavaScript'));
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt('J'))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))
// let text = 'You cannot end a sentence with because because because is a conjunction'
// console.log(text.indexOf('because'))
// console.log(text.lastIndexOf('because'))
// console.log(text.search('because'))
// let challengeTwo = '                30 Days Of JavaScript     '
// console.log(challengeTwo.trim())
// console.log(challenge.startsWith('30'))
// console.log(challenge.endsWith('JavaScript'))
// let allACharacters = /a/gi
// console.log(challenge.match(allACharacters))
// let firstTextPart = '30 Days Of';
// let secondTextPart = ' JavaScript';
// console.log(firstTextPart.concat(secondTextPart))
// console.log(challenge.repeat(2))

// day 2 - level 2
// console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
// console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
// let string = '10';
// let number = 10;
// console.log(typeof(string) == typeof(number))
// let numbefy = Number(string);
// console.log(numbefy)
// console.log(typeof(numbefy) == typeof(number))
// let floatNum = 9.8
// let flotify = parseFloat(floatNum)
// console.log(flotify);
// let exactNum = parseInt(floatNum)
// console.log(exactNum)
// let finalNum = Math.round(floatNum)
// console.log(finalNum)
// console.log(finalNum == number)
// let str1 = 'phyton'
// let str2 = 'jargon'
// console.log(str1.includes('on') == str2.includes('on'))
// let sentence = 'I hope this course is not full of jargon'
// console.log(sentence.includes('jargon'))
// console.log(Math.round(Math.random()*100+1))
// console.log(Math.round (Math.random() * (100 - 50 + 1) + 50))
// console.log(Math.round (Math.random() * 255+1))
// let str3 = 'JavaScript'
// let strAtoms = str3.split('')
// console.log(strAtoms)
// console.log(str3.charCodeAt(0)) //j
// console.log(str3.charCodeAt(1)) //a
// console.log(str3.charCodeAt(2)) //v
// console.log(str3.charCodeAt(4)) //s
// console.log(str3.charCodeAt(5)) //c
// console.log(str3.charCodeAt(6)) //r
// console.log(str3.charCodeAt(7)) //i
// console.log(str3.charCodeAt(8)) //p
// console.log(str3.charCodeAt(9)) //t

// // indexes or code numbers ↓
// let jLetter = Math.round (Math.random() * (74 - 74) + 74)
// let aLetter = Math.round (Math.random() * (97 - 97) + 97)
// let vLetter = Math.round (Math.random() * (118 - 118) + 118)
// let sLetter = Math.round (Math.random() * (83 - 83) + 83)
// let cLetter = Math.round (Math.random() * (99 - 99) + 99)
// let rLetter = Math.round (Math.random() * (114 - 114) + 114)
// let iLetter = Math.round (Math.random() * (105 - 105) + 105)
// let pLetter = Math.round (Math.random() * (112 - 112) + 112)
// let tLetter = Math.round (Math.random() * (116 - 116) + 116)

// console.log(String.fromCharCode(jLetter,aLetter,vLetter,aLetter,sLetter,cLetter,rLetter,iLetter,pLetter,tLetter))

// console.log(` 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125`)

// let phrase = 'You cannot end a sentence with because because because is a conjunction'
// console.log(phrase.indexOf('b'))
// console.log(phrase.substr(31, 23))

// day 2 - level 3
// let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let findWord = /love/gi
// console.log(sentence.match(findWord))

// let secSentence = 'You cannot end a sentence with because because because is a conjunction'
// let findSecWord = /because/gi
// console.log(secSentence.match(findSecWord))

// let thSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// let sentenceCleaner = /[@#$%&;]/g
// console.log(thSentence.replace(sentenceCleaner, ''))

// let foSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// // let numExtractor = /[0-9]/g
// let numExtractor = /\d+/g
// console.table(foSentence.match(numExtractor))
// let numArray = foSentence.match(numExtractor);
// let salaryAnnualIncome = numArray[0]*12
// let coursesAnnualIncome = numArray[2]*12
// let bonusAnnualIncome = numArray[1]*1
// console.log(salaryAnnualIncome, bonusAnnualIncome ,coursesAnnualIncome)
// let totalAnnualIncome = salaryAnnualIncome + coursesAnnualIncome + bonusAnnualIncome
// console.log(totalAnnualIncome)
// extract the numbers from the string ✔
// times 12 months the sum of the income ✔
// calculate total annual income ✔

// day 3
// console.log(false == false)
// firstName, lastName, country, city, age, isMarried, year
// let firstName = 'Oscar';
// let lastName = 'Grand';
// let country = 'USA';
// let city = 'Phoenix';
// let age = 16;
// let isMarried = false;
// const now = new Date();
// let year = now.getFullYear;
// console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year));
// let number = 16;
// let stringNum = '16';
// console.log(typeof(number) == typeof(stringNum))
// let parseNum = parseInt('9.8')
// let wholeNum = 10;
// console.log(parseNum == wholeNum)
// let amIwell = true;
// let doIHaveHope = true;
// let isEnergyEmpty = true;
// let isLight = false;
// let isFoodEmpty = false;
// let isWarEnd = false;
/*
4 > 3       true
4 >= 3      true
4 < 3       false
4 <= 3      false
4 == 4      true
4 === 4     true
4 != 4      false
4 !== 4     false
4 != '4'    false
4 == '4'    true
4 === '4'   false
Find the length of python and jargon and make a falsy comparison statement.
*/
// let str1 = 'python';
// let str2 = 'jargon';
// console.log(str1.length, str2.length)
// console.log(str1 != str2)
// console.log(4 > 3, 
//     4 >= 3,
//     4 < 3,     
//     4 <= 3,    
//     4 == 4,
//     4 === 4,
//     4 != 4,
//     4 !== 4,
//     4 != '4',
//     4 == '4',
//     4 === '4')
/*
4 > 3 && 10 < 12        true
4 > 3 && 10 > 12        false
4 > 3 || 10 < 12        true
4 > 3 || 10 > 12        true
!(4 > 3)                false
!(4 < 3)                true
!(false)                true
!(4 > 3 && 10 < 12)     false
!(4 > 3 && 10 > 12)     true
!(4 === '4')            true
There is no 'on' in both dragon and python      false
*/
// let str3 = 'dragon';
// let strRegExp = /on/g;
// console.log(str1.match(strRegExp) != str3.match(strRegExp))
// console.log(str1.search('on') != str3.search('on'))
// console.log(4 > 3 && 10 < 12,
//     4 > 3 && 10 > 12,
//     4 > 3 || 10 < 12,
//     4 > 3 || 10 > 12,
//     !(4 > 3),
//     !(4 < 3),
//     !(false),
//     !(4 > 3 && 10 < 12),
//     !(4 > 3 && 10 > 12),
//     !(4 === '4'))
/* 
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
// console.log(now.getFullYear())
// console.log(now.getMonth()+1 + `    today is March`)
// console.log(now.getDate() + `   today is third day of a month`)
// console.log(now.getDay() + `    today is Thursday`)
// console.log(now.getHours() + ` hours is my Ukraine time`)
// console.log(now.getMinutes() + ` minutes is my Ukraine time`)
// console.log(now.getTime())
// day 3 - ex.level 2
// let base = prompt('1 - enter the number of a triangle BASE');
// let height = prompt('2 - enter the number of a triangle HEIGHT')
// let calculateArea = 0.5 * base * height
// let result = alert(`The result of your triangle area is ${calculateArea}`)

// let sideA = prompt(`1 - Enter a number of side A from your triangle`)
// let sideB = prompt(`2 - Enter a number of side B from your triangle`)
// let sideC = prompt(`3 - Enter a number of side C from your triangle`)
// let num1 = +sideA
// let num2 = +sideB
// let num3 = +sideC
// let trianglePerimeter = num1 + num2 + num3;
// let result = alert(`The result of a triangle perimeter is ${+trianglePerimeter}`)

// let lenght = prompt('1 - Enter Lenght')
// let width = prompt('2 - Enter Width')
// let num1 = +lenght
// let num2 = +width
// let area = 2 * (num1 + num2)
// let result = alert(`area = ${area}`)

// const PI = 3.14
// let r1 = prompt('enter radius in cm')
// let num1 = +r1
// let circleArea = PI * (num1 ** 2)
// let circumference = num1 * (PI ** 2)
// let result = alert(`The area of your circle = ${circleArea} cm2\nThe circumference of your circle = ${circumference} cm`)

// level 2 - ex.5 & ex6 + ex7 (what is slope?) 
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
// Compare the slope of above two questions.

// ex8
// let x = prompt(`enter X`)
// let num1 = +x
// let y = (num1**2) + (6*num1) + 9
// let result = alert(`y = ${y}`) //   if X = -3 the Y will = 0

// let workHours = prompt(`enter your work hours`)
// let ratePerHour = prompt('enter your rate per hour')
// let hours = +workHours
// let rate = +ratePerHour
// let total = hours * rate
// let result = alert(`Your earned: ${total} $`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
// let myName = 'Bohdan'
// myName.length > 7
// ? console.log(`my name is LONG`)
// : console.log(`my name is SHORT`)

// 11
// let secName = 'Lavrentiev'
// let shortName = myName.length < secName.length // true
// let longName = myName.length > secName.length // false
// let longResult = 'longer'
// let shortResult = 'shorter'

// shortName
// ? console.log(`Your first name, ${myName} is ${shortResult} than your family name, ${secName}`)
// : console.log(`Your first name, ${myName} is ${longResult} than your family name, ${secName}`)

// 12
// let myAge = 16
// let yourAge = 718
// let yearsDifference = myAge - yourAge

// myAge > yourAge
// ? console.log(`I am ${yearsDifference} years older than you.`)
// : console.log(`I am ${Math.abs(yearsDifference)} years younger than you.`)

//13
// let userBirthday = prompt(`Enter year of your birthday`)
// let numYear = +userBirthday     // 2010
// let userYears = now.getFullYear() - numYear     // 2022-2010= 12
// let yearEnough = 18
// let afterYears = 18 - userYears

// userYears >= 18
// ? console.log(`You are ${userYears}. You are old enough to drive.`)
// : console.log(`You are ${userYears}. You will be allowed to drive after ${afterYears} years.`)

//14
// let userYear = prompt(`enter your number of y.o.`)
// let numUserYear = +userYear         // 25
// 25 * (12)
// let userSeconds = numUserYear * 365 * 24 * 60 * 60

// let resultUserYear = alert(`You lived ${userSeconds} seconds.`) // I'm not sure - check yourself when u will get the internet
// console.log(now.getTime())
// нужно отрезать часть от 1970 года
// для этого нужно узнать год рождения из данных о годах указанных в промте, допустим это будет 1997
// затем сделать расчёт 1997-1970 = 27 лет
// эти года переводим уже в сеунды
// отнимаем от нашей функции getTime полученные секунды
// НО! нужно также для точности вычислить разницу месяцев в секундах