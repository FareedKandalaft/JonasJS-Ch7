// // Lecture: let and const
// //
// //  ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);
//
//
// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'JaneMiller';
// console.log(name6);

// // ES5 function
// function driversLicense5(passed){
//   if (passed) {
//     var firstName = 'John';
//     var yearOfBirth = '1990';
//
//
//   }
//
//       console.log(firstName + ' born in ' + yearOfBirth + ' is now officially licensed to drive.');
// }
//
// driversLicense5(true);
//
//
// // ES6 function
// function driversLicense6(passed){
//     let firstName = 'Mark';
//     const yearOfBirth = '1990';
//
//   if (passed) {
//     firstName = 'Bill';
//   }
//
//       console.log(firstName + ' born in ' + yearOfBirth + ' is now officially licensed to drive.');
// }
//
// driversLicense6(true);
//
// // ES6 uses block scope with let and const
// // ex this will output 0 1 2 3 4 23
// // because they are 2 different i variables
// // let i = 23;
// // for (let i = 0; i < 5; i++) {
// //   console.log(i);
// // }
// // console.log(i);
//
//
// // ES5 var is NOT block scoped
// // ex this will output 0 1 2 3 4 5
// var i = 23;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

//////
//////// Lecture Blocks and IIFEs
// {
//   const a = 1;
//   let b = 2;
// }
//
// let firstName = 'john';
// let lastName = 'Smith';
// const yearOfBirth= 1990;
//
// function calcAge(year) {
//   return 2016 - year;
// }
//
//
// // ES5 -- version
// // annoying string concatenation
// console.log('This is ' + firstName + ' ' + lastName + ' etc...');
//
// // ES6 -- version
// // similar to String.Format() in C#
// // uses template literals with the backtick and { }
// console.log(`This is ${firstName} ${lastName}`);
//
//
// // ES6 provides 4 nice string methods
// const n = `${firstName} ${lastName}`;
// console.log(n);
// console.log(n.startsWith('J')); // false because case sensitive
// console.log(n.endsWith('h')); // true
// console.log(n.includes('oh')); // true
// console.log(`${firstName} `.repeat(3)); // john john john

// ARROW FUNCTIONS in ES6
// const years = [1990, 1965, 1982, 1937];
//
// // ES5 style using map to iterate and apply to an array
// var ages5 = years.map(function(curr){
//   return 2019 - curr;
// });
// console.log(ages5);
//
// // ES6 uses => like C#
// var ages6 = years.map(x => 2016 - x);
// console.log(ages6);
//
// // with 2 or more variables use ()
// ages6 = years.map((x, index) => `Age of element ${index + 1}: ${2019 - x}.`);
// console.log(ages6);
//
// // note use of {} and return if => contains 2 or more statements
// ages6 = years.map((x, index) => {
//   const now = new Date().getFullYear();
//   const age = now - x;
//   return `Age of element ${index + 1}: ${age}.`;
// })
// console.log(ages6);

function Person(name){
  this.name = name;
}

// ES5 style
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function(curr){
    return this.name + ' is friends with ' + curr;
  }.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jodi', 'Dolores'];
new Person('John').myFriends5(friends);

// ES6 style
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map(curr => `${this.name} is friends with ${curr}`);
  console.log(arr);
}

var friends = ['Trixy', 'Jenna', 'Megan'];
new Person('Mike').myFriends6(friends);
