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
console.log(loaf.flour, loaf.water, loaf.hydration());

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

let result = avengers.forEach( avenger => avengers.boss ? console.log(`${avenger.name}: ${avenger.jobTitle} reports to ${boss}`) : console.log(`${avenger.name}: ${avenger.jobTitle} reports to no one`));

//avengers.forEach(avenger => console.log(`${avenger.name}: ${avenger.jobTitle} reports to ${boss}`));
console.log(result);

