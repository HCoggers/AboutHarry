alert('How well do you know me? answer these yes or no questions ');
var name = prompt('Is my first name really Harrison? Y/N');
console.log('First name:', name);

if(name.toLowerCase() === 'no' || name.toLowerCase() ==='n'){
    var score = 20;
    alert('Good job! Your score is now ' + score);
}else{
    var score = 0;
    alert('Not Quite. Your score is ' + score);
}
console.log('score is:', score);

var dance = prompt('Is tap my favorite style of dance?');
console.log('Enjoys Tap:', dance);

if(dance.toLowerCase() === 'no' || dance.toLowerCase() ==='n'){
    score = (score + 20);
    alert('Well done! Your Score is now ' + score);
}else{
    alert('Try again. Your score is ' + score);
}
console.log('score is:', score);

var pets = prompt('Do I like cats better than dogs?');
console.log('Prefers cats:', pets);

if(pets.toLowerCase() === 'yes' || pets.toLowerCase() ==='y'){
    score = (score + 20);
    alert('Exactly Right! Your Score is now ' + score);
}else{
    alert('C\'mon, that was an easy one! Your score is ' + score);
}
console.log('score is:', score);

var gen = prompt('Am I technically a millenial? #Guessinggame #Nofilter');
console.log('Is Millenial:', gen);

if(gen.toLowerCase() === 'yes' || gen.toLowerCase() ==='y'){
    score = (score + 20);
    alert('You Rock! Your Score is now ' + score);
}else{
    alert('You\'ll get it next time... Your score is ' + score);
}
console.log('score is:', score);

var success = prompt('This is a tricky one. Do you think you passed this test?');
console.log('Passing Grade:', success);

if((score > 60 && success.toLowerCase() === 'yes') || (score > 60 && success.toLowerCase() === 'y')){
    score = (score + 20);
    alert('CONGRATULATIONS! YOU PASSED WITH ' + score + ' POINTS!');
    alert('Your prize? I think knowing a cool dude like me is reward enough.');
}else if(score > 80){
    alert('WRONG! Which in this case is a good thing. YOU PASSED WITH ' + score + ' POINTS!');
    alert('Your prize? I think knowing a cool dude like me is reward enough.');
}else if(success.toLowerCase() === 'yes' || success.toLowerCase() === 'y'){
    alert('WRONG! You don\'t seem to know me at all! You only scored ' + score + ' points...');
    alert('Sorry, pal, you failed. refresh the page if you want to try again!');
}else{
    score = (score + 20);
    alert('Unfortunately, that\'s correct. You only scored ' + score + ' points...');
    alert('Sorry, pal, you failed. refresh the page if you want to try again!');
}

console.log('final score is:', score);