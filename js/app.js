/* eslint-disable no-console */
/* eslint-disable strict */
alert('How well do you know me? answer these yes or no questions ');
var name = prompt('Is my first name really Harrison? Y/N');
console.log('First name:', name);

if(name.toLowerCase() === 'no' || name.toLowerCase() === 'n'){
  var score = 1;
  alert('Good job! Your score is now ' + score + '/7');
}else{
  score = 0;
  alert('Not Quite. Your score is ' + score + '/7');
}
console.log('score is:', score, 'out of 7');

var dance = prompt('Is tap my favorite style of dance?');
console.log('Enjoys Tap:', dance);

if(dance.toLowerCase() === 'no' || dance.toLowerCase() === 'n'){
  score++;
  alert('Well done! Your Score is now ' + score + '/7');
}else{
  alert('Try again. Your score is ' + score + '/7');
}
console.log('score is:', score, 'out of 7');

var pets = prompt('Do I like cats better than dogs?');
console.log('Prefers cats:', pets);

if(pets.toLowerCase() === 'yes' || pets.toLowerCase() === 'y'){
  score++;
  alert('Exactly Right! Your Score is now ' + score + '/7');
}else{
  alert('C\'mon, that was an easy one! Your score is ' + score + '/7');
}
console.log('score is:', score, 'out of 7');

var gen = prompt('Am I technically a millenial? #Guessinggame #Nofilter');
console.log('Is Millenial:', gen);

if(gen.toLowerCase() === 'yes' || gen.toLowerCase() === 'y'){
  score++;
  alert('You Rock! Your Score is now ' + score + '/7');
}else{
  alert('You\'ll get it next time... Your score is ' + score + '/7');
}
console.log('score is:', score, 'out of 7');

var caffeine = prompt('Okay, here\'s an easy one. Do I prefer coffee over tea?');
console.log('Drink preference is:', caffeine);

if(caffeine.toLowerCase() === 'yes' || caffeine.toLowerCase() === 'y'){
  score++;
  alert('I love my bean juice! Your Score is now ' + score + '/7');
}else{
  alert('Tea\'s alright, but not my preference... Your score is ' + score + '/7');
}
console.log('score is:', score, 'out of 7');

//QUESTION 6

var cream = prompt('So, now you know I love my coffee, can you guess how many sugars I use? It\'s less than 10, and I\'ll even give you 4 chances!')

while (cream !== 3){
  while(!(cream < 10) || cream < 0){
    cream = prompt('Please type an integer between 0 and 9.');
  }
  for(var i = 0; i < 3; i++){
    if (cream < 3){
      cream = prompt ('More than that.');
    }
    else if (cream > 3) {
      cream = prompt ('Less than that.')
    } else {
      break;
    }
  }
  break;
} 
console.log('Number of sugars:', cream);

cream = parseInt(cream);

if (cream === 3) {
  score++;
  alert('You figured it out! Your score is now ' + score + '/7');
} else {
  alert('you couldn\'t get it. your score is ' + score + '/7');
}


console.log('final score is:', score);

document.getElementById('scorestatement').innerHTML = score;