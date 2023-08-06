// Basic Types
let id: number = 2;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello'
let age: number;

age = 30;

// Arrays
let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', false];
let employee: [number, string][];

employee = [
  [1, "Omotayo"],
  [2, 'Olamide'],
  [3, 'Tolulope']
];

// Union
let pId: string | number;
pId = 22;

// Enum - Enumerated Types
enum Direction1 {
  Up = 2,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

// console.log(Direction1.Left)

// Objects
type User = {
  id: number,
  name: string
}

const user:  User = {
  id: 1,
  name: "John"
}

// const user: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: "John"
// }

// Intersection
type Draggable = {
  drag: () => void
}

type Resizeable = {
  resize: () => void
}

type UIWidget = Draggable & Resizeable;

// Type Assertion
let cId: any = 1;
// let customerId = <number>cId;

let customerId = cId as number;

customerId = 22

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message)
}

log('Hello world')

// A Type can be used with primitives and unions but you can use an interface like that
type Point = number | string;
const p1: Point = 1;

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number     //This is for optional properties
}

const user1: UserInterface = {
  id: 1,
  name: "John"
}

// You can also used interfaces with functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y


interface PersonInterface {
  id: number,
  name: string,
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name; 
  }
  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, "Brad Traversy")
const mike = new Person(2, 'Mike Tyson')

// subclasses
class Employee extends Person {
  position: string
  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');

// Generics - used to build reusable components

// T - generic is like the placeholder for the type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'ken'])

strArray.push('hello');


// Literal (exact, specific);
let quantity: 50 = 50;
let amount: 50 | 100 = 100;

type Quantity = 50 | 100;
let qty: Quantity = 100;