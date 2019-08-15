'use strict';

// GUESSING GAME
/*

  - Must contain all Yes/No or y/n answers, and should account for capitalization errors
  - Descriptive console logs for every answer
  - CSS styling as you see fit
  - update README and Add, Commit, Push regularly

*/

// QUESTION 1

var answerOne = prompt('Is my favorite color blue? yes or no.');

while(answerOne.toLowerCase() !== 'y' && answerOne.toLowerCase() !== 'n' && answerOne.toLowerCase() !== 'yes' && answerOne.toLowerCase() !== 'no') {
  answerOne = prompt('please answer yes or no.');
}

console.log('answerOne: ', answerOne);

if (answerOne.toLowerCase() === 'n' || answerOne.toLowerCase() === 'no'){
  alert('Correct! blue is not my favorite color. I\'m not sure what actually is though... Maybe hot pink.');
} else {
  alert('Incorrect! blue is not my favorite color. Shows how much you know...');
}

// QUESTION 2

var answerTwo = prompt('Am I married? yes or no.');

while(answerTwo.toLowerCase() !== 'y' && answerTwo.toLowerCase() !== 'n' && answerTwo.toLowerCase() !== 'yes' && answerTwo.toLowerCase() !== 'no') {
  answerTwo = prompt('please answer yes or no.');
}

console.log('answerTwo: ', answerTwo);

if (answerOne.toLowerCase() === 'n' || answerOne.toLowerCase() === 'no'){
  alert('Correct! I can\'t wait to be, but currently, I am only engaged. The wedding is in 2021!');
} else {
  alert('Incorrect! I am happily engaged to my dear David, but we won\'t be married for another year and a half.');
}

// QUESTION 3


// QUESTION 4


// QUESTION 5


