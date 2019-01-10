/* eslint-disable no-console */
/* eslint-disable strict */

// Next Step: Add loops to Y/N questions, to ensure a yes or no answer. also, organize with more white space and comments
var score = 0;


//QUESTION 3
function question1() {
  alert('How well do you know me? answer these yes or no questions ');
  var name = prompt('Is my first name really Harrison? Y/N');
  console.log('First name:', name);

  if(name.toLowerCase() === 'no' || name.toLowerCase() === 'n'){
    score = 1;
    alert('Good job! Your score is now ' + score + '/7');
  }else{
    score = 0;
    alert('Not Quite. Your score is ' + score + '/7');
  }
  console.log('score is:', score, 'out of 7');
}


//QUESTION 2
function question2() {
  var dance = prompt('Is tap my favorite style of dance?');
  console.log('Enjoys Tap:', dance);

  if(dance.toLowerCase() === 'no' || dance.toLowerCase() === 'n'){
    score++;
    alert('Well done! Your Score is now ' + score + '/7');
  }else{
    alert('Try again. Your score is ' + score + '/7');
  }
  console.log('score is:', score, 'out of 7');
}


//QUESTION 3
function question3() {
  var pets = prompt('Do I like cats better than dogs?');
  console.log('Prefers cats:', pets);

  if(pets.toLowerCase() === 'yes' || pets.toLowerCase() === 'y'){
    score++;
    alert('Exactly Right! Your Score is now ' + score + '/7');
  }else{
    alert('C\'mon, that was an easy one! Your score is ' + score + '/7');
  }
  console.log('score is:', score, 'out of 7');
}


//QUESTION 4
function question4() {
  var gen = prompt('Am I technically a millenial? #Guessinggame #Nofilter');
  console.log('Is Millenial:', gen);

  if(gen.toLowerCase() === 'yes' || gen.toLowerCase() === 'y'){
    score++;
    alert('You Rock! Your Score is now ' + score + '/7');
  }else{
    alert('You\'ll get it next time... Your score is ' + score + '/7');
  }
  console.log('score is:', score, 'out of 7');
}


//QUESTION 5
function question5() {
  var caffeine = prompt('Okay, here\'s an easy one. Do I prefer coffee over tea?');
  console.log('Drink preference is:', caffeine);

  if(caffeine.toLowerCase() === 'yes' || caffeine.toLowerCase() === 'y'){
    score++;
    alert('I love my bean juice! Your Score is now ' + score + '/7');
  }else{
    alert('Tea\'s alright, but not my preference... Your score is ' + score + '/7');
  }
  console.log('score is:', score, 'out of 7');
}


//QUESTION 6
function question6() {
  var sugar = prompt('So, now you know I love my coffee, can you guess how many sugars I use? It\'s less than 10, and I\'ll even give you 4 chances!')

  if (sugar !== 3){
    while(!(sugar < 10) || sugar < 0){
      sugar = prompt('Please type an integer between 0 and 9.');
    }
    for(var i = 0; i < 3; i++){
      sugar = parseInt(sugar);
      if (sugar < 3){
        sugar = prompt ('More than that.');
      } else if (sugar > 3) {
        sugar = prompt ('Less than that.');
      } else if (sugar === 3){
        break;
      } else {
        sugar = prompt ('try again');
      }
      sugar = parseInt(sugar);
    }
  }

  console.log('Number of sugars:', sugar);

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
  var lizard = prompt ('Last question! My sister owns a menagerie of different reptiles. Can you guess a one kind of lizard that she has? you\'ll get SIX tries this time.');

  if (lizard.toLowerCase() !== lizArray[0] && lizard.toLowerCase() !== lizArray[1] && lizard.toLowerCase() !== lizArray[2]) {
    for (var n = 0; n < 6; n++) {
      switch (lizard.toLowerCase()) {
      case lizArray[0]:
        break;
      case lizArray[1]:
        break;
      case lizArray[2]:
        break;
      default:
        lizard = prompt ('I\'ll let you try again. what kind of lizard?');
        break;
      }
    }
  }

  console.log('lizard guess:', lizard);

  if (lizard.toLowerCase() !== lizArray[0] && lizard.toLowerCase() !== lizArray[1] && lizard.toLowerCase() !== lizArray[2]) {
    alert('She doesn\'t have any of those. your score is ' + score + '/7');
  } else {
    score++;
    alert('She\'s got one of those! Good job! Your score is now ' + score + '/7'); 
  }
}

//CALL QUESTION FUNCTIONS
question1();
question2();
question3();
question4();
question5();
question6();
question7();

console.log('final score is:', score);

//DISPLAY SCORE ON WEBPAGE
document.getElementById('scorestatement').innerHTML = score;