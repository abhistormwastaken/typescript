"use strict";
let x = 1;
// x = "harkirat" // Error: Type 'string' is not assignable to type 'number'.
console.log(x);
function greet(firstName) {
    console.log("Hello, " + firstName);
}
greet("Abhishek");
function greetPerson(person) {
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
function move(key) {
    console.log("Moving " + key);
}
// can be used to define union types, intersection types, and tuple types
// now lets check out enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
function moveDirection(direction) {
    console.log("Moving " + direction);
}
moveDirection(Direction.Up);
console.log(Direction.Up); // 0
// enums are used to define a set of named constants
