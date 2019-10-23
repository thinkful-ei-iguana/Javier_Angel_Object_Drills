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
            return `${this.firstName} ${this.lastName}`
        } 
    };
    return person;
}


function keyDeleter (obj) {
  delete obj.foo
  delete obj.bar
  return obj
}

function makeStudentReport (data) {
  let newObj = {
    name,
    grade,
  }
  return newObj `name: ${name}, grade: ${grade}`
};

function enrollInSummerSchool (students) {
  return students.map (student => {
    let newObj = {
      name: `${student.name}`,
      status: 'in summer school',
      course: `${student.course}`
    }
    return newObj;
  });
};

function findById (items, idNum) {
  return items.find(item => item.id === idNum);
}

function validateKeys(object,expectedKeys){
  let keys = Object.keys(object)
  
  if(keys.length === expectedKeys.length){
    for(let i = 0; i < expectedKeys.length ; i++){
      if(keys[i] === expectedKeys[i]){
        return true

      }
    }
  }
return false
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
  console.log(`${prop}: ${rickRolled[prop]}`)
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


function decode(encode){
  const decoder = {
    a:2,
    b:3,
    c:4,
    d:5,
    space: ' ',
  };
  let cracked = '';
  let words = encode.split(' ');
  
  for(let i = 0; i < words.length; i++){
    for(let prop in decoder){
      if(words[i].slice(0,1) === prop){
        cracked += words[i][decoder[prop] -1 ]
        //cracked.push(words[i][decoder[prop] - 1]);
      } else {//if (words[i].slice(0,1) !== prop){
          cracked += ''
        //cracked.push([decoder['space']]);
      }
    }
  }
  
  console.log(cracked);
  return cracked;
}

let codedMessage = 'craft block argon meter bells brown croon droop';
decode(codedMessage);

///////////////////////////////////////////////////////////

// const createCharacter = {
//   name:' Gandalf the White',
//   nickname:'gandalf',
//   race:
//   origin:
//   attack:
//   defense:
// }

///////////////CREATE CHARACTER.. FIGHT//////////
function createCharacter(name,nickname,race,origin,attack,defense,weapon){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      if(this.weapon){
        console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
      } else {
        console.log(`${this.name} is a ${this.race} from ${this.origin}`);
      }
    },
    evaluateFight: function(character1,character2){
      if(character1.attack > character2.defense){
        console.log(` Your opponent takes ${character1.attack - character2.defense} damage and you receive 0 damage`);
      } if(character2.defense > character1.attack || character1.attack < character2.defense){
        console.log(`${character2.name} takes no damage`);
      }
    },
  };
}
const test1 = createCharacter('Gandalf the white','gandalf','wizard','middle earth', 10, 6, 'wizard staff');
///////////////wizard staff arguement for weapon parameter
const test2 = createCharacter('bilbo baggins','frodo','hobbit','the shire', 2, 1);

//test1.describe();
//test2.describe();

//test1.evaluateFight(test1,test2);

const character1 = createCharacter('Gandalf the white','gandalf','wizard','middle earth', 10, 6);
const character2 = createCharacter('bilbo baggins','frodo','hobbit','the shire', 2, 1);
const character3 = createCharacter('frodo baggins','frodo','hobbit','the shire', 3, 2);
const character4 = createCharacter('aragorn son of arathorn','aragorn','man','dunnedain', 6, 8);
const character5 = createCharacter('legolas','logolas','elf','woodland realm', 8, 5);
const character6 = createCharacter('javi','the great','man','murica', 10, 10);



let characters = [];
characters.push(character1,character2,character3,character4,character5,character6);
//console.log(characters);

/*
function findMe(nickname){
  return nickname.nickname === 'aragorn';
}
console.log(characters.find(findMe));
*/

let result = characters.find(({nickname}) => nickname === 'aragorn');
//console.log(result);

let hobbits = characters.filter(char => char.race === 'hobbit');
//console.log(hobbits);

let above5 = characters.filter(char => char.attack > 5);
//console.log(above5);





//////////////'TOP OF PROGRAM'//////////// 'BONUS: A DATABASE SEARCH'
const heroes = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


function findOne(arr,query){//query => object
  let inputs = Object.keys(query);
  let arrKeys = [];

  arr.forEach(el => arrKeys.push(Object.keys(el)));
  //console.log(arrKeys[0][2]);
  //console.log(inputs);

  
  for(let i = 0; i < arr.length; i++){
    for(let prop in arrKeys){
      if(arrKeys[prop].includes(inputs[0]) && !arrKeys[prop].includes(inputs[1])){
        //console.log('found id OR squad')
        if(arr[i].id === query.id || arr[i].squad === query.squad){
          console.log('found id OR squad');
          console.log(arr[i]);
          return arr[i];
        }
      } else if(arrKeys[prop].includes(inputs[0]) && arrKeys[prop].includes(inputs[1])){
      //console.log('found id and name')
        if(arr[i].id === query.id && arr[i].name === query.name){
          console.log('found id and name');
          console.log(arr[i]);
          return arr[i];
        } else if(arrKeys[prop].includes(inputs[0]) && arrKeys[prop].includes(inputs[1])){
          //console.log('found id and squad');
          if(arr[i].id === query.id && arr[i].squad === query.squad){
            //console.log('found id and squad')
            console.log(arr[i]);
            return arr[i];
          } else if(arrKeys[prop].includes(inputs[0]) && arrKeys[prop].includes(inputs[1]) && arrKeys[prop].includes(inputs[2])){
            //console.log('found id, name and squad')
            if(arr[i].id === query.id && arr[i].name === query.name && arr[i].squad === query.squad){
              console.log('found id ,name AND squad');
              console.log(arr[i]);
              return arr[i];
            }
          }
        } 
      }
    }

  }
  
}
///////////id: 1 => name: 'captain america, id:2 => name: 'iron man'
//findOne(heroes,{ squad: 'Justice League'} );

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },

    ]
  },
  findOne: function(id){
    let inputs = Object.keys(id);
    let arrKeys = [];
    this.store.heroes.forEach(el => arrKeys.push(Object.keys(el)));

    let object = this.store.heroes;


    for(let i = 0; i < arrKeys.length; i++){
      for(let prop in arrKeys){
        if(arrKeys[prop].includes(inputs[0])){
          //console.log('found id OR squad')
          if(object[i].id === id.id){
            console.log(object[i]);
            return object[i];
          }
        }

      }
    }
  }
};

Database.findOne({ id: 7,});