// Basic type
let id: number = 7
let company: string = 'R316'
let isPublished: boolean = true
let x: any = 'Any'

let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr: any[] = [1, 'dsf', true]

// Tuple
let person: [number, string, boolean] = [1, 'f', true]

// Tuple Arr`
let employee: [number, string][]

employee = [
  [1, 'd'],
  [2, 'df'],
]

// Union
let pid: string | number = 'true' // can string or number

// Enum
enum Direction1 {
  Up, // Up = 1
  Down,
  Left,
  Right,
}

// console.log(Direction1.Up) // 0, equal 1 if set Up = 1

enum Direction2 {
  Up = 'Up', // Up = 1
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// ! Revise Enum from youtube

// console.log(Direction2.Left) // 0, equal 1 if set Up = 1

// Objs
const user: {
  id: number
  name: string
} = {
  id: 78,
  name: 'dd',
}

type User = {
  id: number
  name: string
}

const user2: User = {
  id: 78,
  name: 'user2',
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid // GAN cid for customerId, <number> for check type
// let customerId = cid as number // other way

// console.log(customerId)

// Function
function addNum(x: number, y: number): number {
  return x + y
}

// Viod: void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
function log(message: string | number): void {
  // console.log(message)
}

/* Interface */
/* 
1. What is diffirent between interface and type
* Res: 
type Point = number | string
const p1: Point = 1 --> it's ok, interface can't do this (interface Point = number | string will show err)

interface can extend from others

What else??
*/

interface UserInterface {
  readonly id: number // readonly: can't change this property after decalre
  name: string
  age?: number // age? -> ? will allow declare either age or not
}

const user3: UserInterface = {
  id: 1,
  name: 'John',
}

// user3.id = 2 // show err if have readonly

interface MathFunc {
  (x: number, y: number): number
} // for check agian after declare func Add

const add: MathFunc = (x: number, y: number): number => x + y // show err if have any type is not match with interface MathFunc

/* Classes */
interface PersonInterface {
  id: number // readonly: can't change this property after decalre
  name: string
  register(): string // : string mean method should return a string
}
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

// const brad = new Person(1, 'Hana');
// console.log(brad)

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shaw', 'Dev')

/* Generic */
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Thong', 'Hana', 'Phat'])

// numArray.push(2)
// strArray.push(2)

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}

// ! revise this from Youtube (The Net Ninja)

let docOne = addUID({ name: 'yoshi', age: 40 })
//let docTwo = addUID('shaun');

console.log(docOne.name)

// with interfaces
interface Resource<T> {
  uid: number
  resourceName: string
  data: T
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' },
}

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: 'shoppingList',
  data: ['bread', 'milk'],
}

console.log(docThree, docFour)
