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
// Tuple Arr
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
console.log(Direction1.Up); // 0, equal 1 if set Up = 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); // 0, equal 1 if set Up = 1
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
console.log(customerId);
