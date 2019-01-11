/* eslint-disable no-console */
'use strict';

var score = 0;


//Yes or No Questions
function yesNoQuestions() {
  var ynquestions = ['Is my first name really Harrison? Y/N', 'Is tap my favorite style of dance? Y/N', 'Do I like cats better than dogs? Y/N', 'Am I technically a millenial?  Y/N', 'Okay, here\'s an easy one. Do I prefer coffee over tea?'];
  var ynanswers = ['n', 'n', 'y', 'y', 'y'];
  var ynresponses = ['n', 'y'];
  for (var i = 0; i < 5; i++) {
    var uresponse = prompt(ynquestions[i]);
    while (uresponse !== ynresponses[0] && uresponse !== ynresponses[1]) {
      switch (uresponse.toLowerCase()) {
        case 'yes':
          uresponse = ynresponses[1];
          break;
        case 'no':
          uresponse = ynresponses[0];
          break;
        default:
          uresponse = prompt('Try again with a yes or no answer.')
          break;
      }
    }
    if (uresponse.toLowerCase() === ynanswers[i]) {
      score++;
      alert('Good job! Your score is now ' + score + '/7');
    } else if (uresponse.toLowerCase() !== ynanswers[i]) {
      alert('Not Quite. Your score is ' + score + '/7');
    }
    console.log('Answer', (i + 1), '=', uresponse);
  }
}


//QUESTION 6
function question6() {
  var sugar = prompt('So, now you know I love my coffee, can you guess how many sugars I use? It\'s less than 10, and I\'ll even give you 4 chances!')

  if (sugar !== 3) {
    while (!(sugar < 10) || sugar < 0) {
      sugar = prompt('Please type an integer between 0 and 9.');
    }
    for (var i = 0; i < 3; i++) {
      sugar = parseInt(sugar);
      if (sugar < 3) {
        sugar = prompt('More than that.');
      } else if (sugar > 3) {
        sugar = prompt('Less than that.');
      } else if (sugar === 3) {
        break;
      } else {
        sugar = prompt('try again');
      }
      sugar = parseInt(sugar);
    }
  }

  console.log('Number of sugars =', sugar);

  if (sugar === 3) {
    score++;
    alert('You figured it out! Your score is now ' + score + '/7');
  } else {
    alert('you couldn\'t get it. your score is ' + score + '/7');
  }
}


//QUESTION 7
function question7() {
  var lizArray = ['chameleon', 'bearded dragon', 'gecko']
  var lizard = prompt('Last question! My sister owns a menagerie of different reptiles. Can you guess a one kind of lizard that she has? you\'ll get SIX tries this time.');

  if (lizard.toLowerCase() !== lizArray[0] && lizard.toLowerCase() !== lizArray[1] && lizard.toLowerCase() !== lizArray[2]) {
    for (var i = 0; i < 6; i++) {
      switch (lizard.toLowerCase()) {
        case lizArray[0]:
          break;
        case lizArray[1]:
          break;
        case lizArray[2]:
          break;
        default:
          lizard = prompt('I\'ll let you try again. what kind of lizard?');
          break;
      }
    }
  }

  console.log('Type of lizard =', lizard);

  if (lizard.toLowerCase() !== lizArray[0] && lizard.toLowerCase() !== lizArray[1] && lizard.toLowerCase() !== lizArray[2]) {
    alert('She doesn\'t have any of those. your score is ' + score + '/7');
  } else {
    score++;
    alert('She\'s got one of those! Good job! Your score is now ' + score + '/7');
  }
}

//CALL QUESTION FUNCTIONS
alert('How well do you know me? answer these questions.');
yesNoQuestions();
question6();
question7();

console.log('Final score =', score);

//DISPLAY SCORE ON WEBPAGE
document.getElementById('scorestatement').innerHTML = score + '/7';