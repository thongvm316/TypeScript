"use strict";
// Basic type
let id = 7;
let company = 'R316';
let isPublished = true;
let x = 'Any';
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, 'dsf', true];
// Tuple
let person = [1, 'f', true];
// Tuple Arr`
let employee;
employee = [
    [1, 'd'], [2, 'df']
];
// Union
let pid = 'true'; // can string or number
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up) // 0, equal 1 if set Up = 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Left) // 0, equal 1 if set Up = 1
// Objs
const user = {
    id: 78,
    name: 'dd'
};
const user2 = {
    id: 78,
    name: 'user2'
};
// Type Assertion
let cid = 1;
let customerId = cid; // GAN cid for customerId, <number> for check type
// let customerId = cid as number // other way
// console.log(customerId)
// Function
function addNum(x, y) {
    return x + y;
}
// Viod: void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
function log(message) {
    // console.log(message)
}
const user3 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y; // show err if have any type is not match with interface MathFunc
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// const brad = new Person(1, 'Hana');
// console.log(brad)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shaw', 'Dev');
/* Generic */
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Thong', 'Hana', 'Phat']);
numArray.push('sdf');
