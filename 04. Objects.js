// The js object is a collection of key value-pais, similar to a map, dictonary, or hash table in other programming languanges
// Anything that is no a js primitive is an object
const object = {
    hello: 'world',
    year: 1984
}

// creating an object
// literal
const obj = { 
    rabbit: 'bunny',
}

obj['rabbit'] = '🐇';
console.log(obj['rabbit'])

// constructor
const cat = new Object();

cat.name = '🐱';
console.log(cat)
console.log(cat.name)

// static method
const horse = Object.create({ })

// shorthand for setting properties
const spider = 'spider';
const legs = 8
const spi = {
    spider,
    legs,
    legs: 10,
    legs: 23, // will overwrite the value
    web: '',
    makeWeb() {
        this.web += '🕸️🕸️🕸️'
        return this;
    }
}

console.log(spi.legs)
// When a functio is addigned to an object, it is called a method
spi.makeWeb().makeWeb().makeWeb()
console.log(spi.web)

// Object properties can be removed with the delete keywork
delete spi.spider;
delete spi.legs;
console.log(spi)

// use a variable or expression as a property name byu wrapping it in brackets - this is called a computed property
const y = 'hello'

const what = {
    [y]: 52
}

console.log(what.hello)

const d = 'smart';

const dog = {
    [d]: '🐶'
}

console.log(dog.smart)

// References
// An object is stored in the heap memory, which means variables maintain a reference to it, as opposed to as full copy of it. 
const original = {}

const w = original;
const n = original;

w === n
console.log(w === n)
w === {};
console.log(w === {})

//Any varibale that points to that reference can set its properties and they will be shared between all variables
w.hello = 'world';

original.hello
console.log(original.hello)
n.hello
console.log(n.hello)

// Combine Objects
//But what if we want to clone an object to create a seperate reference? Object.assign allows us to copy an object's properties and create a new reference.
//Its properties will be copied to the new object will not affect the clone

let a = { boo: 'boo' };

let b = a;
console.log(a, b)
a.boo = 'hello'
console.log(a, b)

const c = Object.assign({}, a)
console.log(c)
console.log(c === a)
a.boo = 'changed!';
console.log(a)
console.log(c.boo)

// Spread cyntax
// A more concise alternative to Object.assing is the spread syntax
const e = { ...a};
console.log(a)

// Constructors are functions that describe how to creat an Object
function Zombie(name) {
    this.name = name;
    this.created = Date.now()

    this.eatBrain = function() {
        return `${this.name} is hungry for....`
    }
}

// The object is then instantiated with the new keyword
const chris = new Zombie('Chris')
console.log(chris.name)
console.log(chris.created)
console.log(chris.eatBrain())

