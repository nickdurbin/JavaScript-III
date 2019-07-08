/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. Window Object Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// let sayName = function() {
//   console.log(this.name);
// }

// let me = {
//   name: 'Nick',
//   age: 35
// }

// sayName();
// window.name = 'Steve';
// sayName();

// Principle 2

// code example for Implicit Binding

let animal = {
  type: 'Dog',
  color: 'white',
  sayName: function(name) {
    console.log(`Here is my ${this.color} ${this.type} and his name is ${name}.`);
  }
}

animal.sayName('Spot');

// Principle 3

// code example for New Binding

function Animal(name) {
  this.noise = 'barks';
  this.name = name;
  this.say = function () {
    console.log(this.name + ' ' + this.noise);
  }
}

const spot = new Animal('Spot');
const cutie = new Animal('Cutie');

spot.say();

// Principle 4

// code example for Explicit Binding

spot.say.call(cutie);