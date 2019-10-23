'use strict';
function createMyObject () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'Hello!';
    }
  };
}
let newObj2 = createMyObject();
console.log(newObj2.sayHello());


function updateObject (obj) {
  obj.foo = 'foo',
  obj.bar = 'bar',
  obj.bizz = 'bizz',
  obj.bang = 'bang' , 

  return obj;
}

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

