// Basic type
let id: number = 7
let company: string = 'R316'
let isPublished: boolean = true
let x: any = 'Any'

let ids: number[] = [1,2,3,4,5,6,7,8,9]
let arr: any[] = [1, 'dsf', true]

// Tuple
let person: [number, string, boolean] = [1, 'f', true]

// Tuple Arr
let employee: [number, string][]

employee = [
    [1, 'd'], [2, 'df']
]

// Union
let pid: string | number = 'true' // can string or number

// Enum
enum Direction1 {
    Up, // Up = 1
    Down,
    Left,
    Right
}

console.log(Direction1.Up) // 0, equal 1 if set Up = 1

enum Direction2 {
    Up = 'Up', // Up = 1
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Left) // 0, equal 1 if set Up = 1

// Objs
const user: {
    id: number,
    name: string,
} = {
    id: 78,
    name: 'dd'
}

type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 78,
    name: 'user2'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid // GAN cid for customerId, <number> for check type
// let customerId = cid as number // other way

console.log(customerId)