"use strict";
// Basic Types
let id = 2;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', false];
let employee;
employee = [
    [1, "Omotayo"],
    [2, 'Olamide'],
    [3, 'Tolulope']
];
// Union
let pId;
pId = 22;
// Enum - Enumerated Types
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// const user: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: "John"
// }
// Type Assertion
let cId = 1;
// let customerId = <number>cId;
let customerId = cId;
customerId = 22;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log('Hello world');
const p1 = 1;
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, 'Mike Tyson');
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics - used to build reusable components
// T - generic is like the placeholder for the type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'ken']);
strArray.push('hello');
