var story = 'Hero Academy: Choose Your Adventure';
console.log(story);



function hero(name) {
    var SuperName = 'Super ' + name;
    var greeting = 'Welcome, ' + SuperName + ' this is Hero Academy. Where you will be trained to be the greatest hero.';
    console.log(greeting);
}
hero('Deku');



var filler = 'Every hero needs a mentor. Now lets choose yours.'
console.log(filler);


function mentor() {
    var mentors = Math.floor(Math.random() * 3);
    var bigNames = ['All Might', 'Batman', 'Captain America'];
    var team = bigNames[mentors];
    console.log(team + ' is your mentor');
}
mentor();

function situation() {
    var randomNum1 = Math.floor(Math.random() * 5);
    var randomNum2 = Math.floor(Math.random() * 5);
    var victem = ['little girl', 'old grandma', 'a baby', 'school bus with kids', 'little boy'];
    var villian = ['Thanos', 'The Joker', 'Goblin', 'Killmonger', 'Orochimaru'];
    console.log('Oh no! ' + villian[randomNum2] + ' has the ' + victem[randomNum1] + ' what are you going to do?')
}
situation();


var num = 11;
if(num <= 5) {
    console.log('You ran away. You are NO HERO! Try again.');
}
else if(num > 5 && num <= 10) {
    console.log('You watched him eat her. You are NO HERO! Try again.');
}
else if(num > 10 && num <= 15) {
    console.log('You saved her. You are a HERO!');
}
else if(num > 15 && num <= 20) {
    console.log('You are no hero! Try again.');
}
else {
    console.log('pick a number');
}