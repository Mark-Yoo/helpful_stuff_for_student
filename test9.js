// // console.log(Person.prototype);


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function() {
//     return `Hi ${name}, you are ${age} years old`;
//   }
// }

// const me = new Person('Yoo', 30);
// // console.log(me.__proto__ === Person.prototype);
// // console.log(me.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor);
// // console.log(Person.prototype)
// const you = new Person('Kim', 50);

let arr = [];

let constructArr = new Array();

// console.log(constructArr);
console.log(Array.prototype);
console.log(constructArr.__proto__.__proto__);
console.log(arr.__proto__.constructor === Array);
console.log(Array.prototype === arr.__proto__);
console.log(Array.prototype === constructArr.__proto__);

// let obj = {};

// let constructorObj = new Object();

// console.log(constructorObj);
// console.log(constructorObj.prototype);
// console.log(Object.prototype)