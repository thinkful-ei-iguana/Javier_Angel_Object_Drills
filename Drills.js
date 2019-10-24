'use strict';
function createMyObject () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      //return 'Hello!';
    }
  };
}
let newObj2 = createMyObject();
console.log(newObj2.sayHello());


//* function updateObject (obj) { 
// obj.foo = 'foo',
// obj.bar = 'bar',
//obj.bizz = 'bizz',
//obj.bang = 'bang' , 

//return obj;
//}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    } 
  };
  return person;
}


function keyDeleter (obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentReport (data) {
  let newObj = {
    name,
    grade,
  };
  return newObj `name: ${name}, grade: ${grade}`;
};

function enrollInSummerSchool (students) {
  return students.map (student => {
    let newObj = {
      name: `${student.name}`,
      status: 'in summer school',
      course: `${student.course}`
    };
    return newObj;
  });
};

function findById (items, idNum) {
  return items.find(item => item.id === idNum);
}

function validateKeys(object,expectedKeys){
  let keys = Object.keys(object);
  
  if(keys.length === expectedKeys.length){
    for(let i = 0; i < expectedKeys.length ; i++){
      if(keys[i] === expectedKeys[i]){
        return true;

      }
    }
  }
  return false;
}

//let loaf = {
//flour:300, 
// water:200,
//hydration: function(){
// return (this.water / this.flour)* 100;
//}
//};
//console.log(loaf.flour, loaf.water, loaf.hydration());

const rickRolled = {
  foo: 'Never',
  bar: 'Gonna',
  fum: 'Give',
  quux: 'You',
  spam: 'Up',
};

for(let prop in rickRolled){
  console.log(`${prop}: ${rickRolled[prop]}`);
}

let newObject = {
  meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(newObject['meals'][3]);


const avengers = [
  {name: 'Nick Fury',
    jobTitle: 'Owner of The Avengers'},

  {name: 'Tony Stark',
    jobTitle: 'Genius, billionaire,playboy, philanthropist',
    boss: 'Nick Fury'},

  {name: 'Thor',
    jobTitle: 'God of Hammers',
    boss: 'Nick Fury'},

  {name: 'Black Widow',
    jobTitle: 'Eye Candy',
    boss: 'Nick Fury'},

  {name: 'Clint Barton',
    jobTitle: 'Guy who shoots arrows',
    boss: 'Nick Fury'},

  {name: 'Ant Man',
    jobTitle: 'Paul Rudd',
    boss: 'Nick Fury'},
];

let result = avengers.forEach(avenger => { 
  if(avenger.boss){ 
    console.log(`${avenger.name}, ${avenger.jobTitle},reports to ${avenger.boss}`); 
  } else { 
    console.log(`${avenger.name}, ${avenger.jobTitle}, doesn't report to anybody`); 
  } });

console.log(result);

function createCharacter ( name, nickname, race, origin, attack,defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function () {
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function (character) {
      let oppDam = this.attack - character.defense;
      let yourDam = character.attack - this.defense;
      if (oppDam < 0) {
        oppDam = 0;
      }
      if (yourDam <0) {
        yourDam = 0;
      }
      return `Your opponent takes ${oppDam} damage and you take ${youDam} damage.`;
    }
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins','bilbo','Hobbit' , 'The Shire' , 2 , 1),
  createCharacter('Frodo Baggins','frodo','Hobbit','The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn' , 'aragorn' , 'Man' , 'Dunnedain' , 6, 8),
  createCharacter('Legolas', 'legolas' , 'Elf' ,'Woodland Realm', 8 , 5)
];

characters.push(createCharacter('Angel', 'Legna', 'Wolf','Parts Uknown',7,8));
let returnVal = characters.find(function(item){
  return item.nickname === 'aragorn';
});
console.log(returnVal.describe());

let overFiveArr = characters.filter(item => item.attack > 5);
console.log(overFiveArr);
