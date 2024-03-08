let x: number = 1;
// x = "harkirat" // Error: Type 'string' is not assignable to type 'number'.
console.log(x);

function greet(firstName: string){
    console.log("Hello, " + firstName);
}

greet("Abhishek");





// -----------------------------------------------

// types vs interfaces
// types and interfaces are used to define custom types

// types are used for object types and interfaces are used for defining object types (interfaces are implemented by classes)
// types are more powerful than interfaces as can also be used to define union types, intersection types, and tuple types (similar to sql schemas)
// interfaces can be used to extend other interfaces

// -----------------------------------------------




// interface example
interface Person {
    firstName: string;
    lastName: string;
}
function greetPerson(person: Person){
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
// interfaces can be implemented but types cannot




// types help you contraint inputs. lets see how
type keyPressed = "up" | "down" | "left" | "right";
function move(key: keyPressed){
    console.log("Moving " + key);
}
// can be used to define union types, intersection types, and tuple types




// now lets check out enums
enum Direction {
    Up, // 0 you can also assign values to enums by using Up = 1, Down = 2, etc
    Down, // 1
    Left, // 2
    Right // 3
}
function moveDirection(direction: Direction){
    console.log("Moving " + direction);
}
moveDirection(Direction.Up);
console.log(Direction.Up); // 0
// enums are used to define a set of named constants




// Generics
// Generics are used to create reusable components
function identity<T>(arg: T[]): T {
    return arg[0];
}
let output1 = identity([1, 2, 3]);
let output2 = identity(["a", "b", "c"]);
// check the type of output1 it'll be number and output2 will be string
// you can also specify the type of generic function like this
let output3 = identity<number>([1, 2, 3]);

// also we us eth ES6 inport export syntax instead of require and module.exports in TS