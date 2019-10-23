'use strict';
function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'Hello!';
    }
  };
}
let newObj2 = createMyObject();
console.log(newObj2.sayHello());


function updateObject(obj) {
  obj.foo = 'foo',
  obj.bar = 'bar',
  obj.bizz = 'bizz',
  obj.bang = 'bang' , 

  return obj;
}

function personMaker(){
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        fullName: function(){
            return `${this.firstName} ${this.lastName}`
        } 
    };
    return person;
}
