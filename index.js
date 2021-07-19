const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//create new array containing names of tutorials with first letter of word capitalized

//new array called titleCased
function titleCased() {
  let result = tutorials.map(tutorial => {
  let splitName = tutorial.split(' ')
  let capitalizeWord = splitName.map(word => {
    let splitLetters = word.split('')
    let firstLetter = splitLetters[0].toUpperCase()
    let otherLetters = splitLetters.slice(1)
    let result = firstLetter + otherLetters.join('')
    
    return result
    })
    return capitalizeWord.join(' ')
})
return result
}


// split tutorial into individual strings
//capitalize first letter of each word in tutorial
//join strings back together
//return new array of capitalized tutorial

