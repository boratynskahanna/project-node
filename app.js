const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Hannah', 'Ana', 'Maria', 'Monica'];
const femaleNames = ['John', 'Peter', 'Michael', 'Matthew'];
const lastNames = ['Brown', 'Smith', 'White', 'Johnson'];
const people  = [];

const randChoice = (arr) => {
    const arg = Math.floor(Math.random() * arr.length);

    return arr[arg];
};

console.log(randChoice(genders));

for (let i = 0; i<20; i++) {
    const gender = randChoice(genders);
    let firstName;
    if (gender === 'M') {
        firstName = randChoice(maleNames);
    } else firstName = randChoice(femaleNames);
    
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * 50) + 18;

    people.push({gender, firstName, lastName, age});
    console.log(people);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) console.log('Something went wrong');
    console.log('File has been successfully generated! Check people.json');
  });