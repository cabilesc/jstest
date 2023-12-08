// Declaration - Definition - Statement
// A function is a piece of code that can be called during the lifecycle of tha pp to perform a task or return a value

// parameters are a list of inputs tha can be passed into a function
function makeBread(qty) {
    const bread = '🍞'.repeat(qty);

    // task or side-effect
    console.log(bread)

    // or return a value
    return bread;

    // or both
}

// arguments are the values to be used as parameters in the function
// a function call executes the code inside the function body
const loaves = makeBread(7); 
console.log(loaves)

// Declarations are hoised, which means they are loaded at the top of the scopr before any other code runs
// makeBread(7); // Call still works here

/*
function makeBread(qty) {
    const bread = '🍞'.repeat(qty);
}
*/

// Function Expression are most widely used
const makeBeer = function(qty) {
    return '🍺'.repeat(qty);
}

const beers = makeBeer(20);
console.log(beers)

// Immediately Invoked Function Expression - IIFE
/*
(function() {
    const x = 23
})();
*/

// Parameters and Arguments

// Positional 
function makeBreakfast (main, side, drink) {
    console.log(arguments)
    return `Breakfast is ${main}, ${side}, ${drink}.`;
}

// Named 
function makeLunch (opts) {
    const { main, side, drink } = opts;
    return `Lunch is ${main}, ${side}, and ${drink}`;
}

// Rest params
function makeDinner (main, ...args) {
    console.log(main, args)
    return `Dinner includes ${main} and ${args.join('')}.`
}
makeBreakfast('🥞', '🥓', '🥛');

makeLunch({ main: '🥙', side: '🍟', drink: '🥤' });

makeDinner('🍜', '🥘', '🍙', '🥠', '🍑');

// Arrow Functions
// provide syntatic sugar for writing compact code, 

const makeMoreBeer = function(qty) {
    return '🍺'.repeat(qty);
}

// Does not have its own this object.
// Implicit return value when brackets are omitted. i.e. () => true returns true.
// Always an expression, never a statement.

const makeWine = (qty) => '🍷'.repeat(qty);
const littleBuzz = makeWine(10);
console.log(littleBuzz)

// Pure Functions
// A pure function is one that only relies on its inputs, produces no side effect, and does not modify values outside its local scope
let global = 0;
const impure = () => {
    global++;
    return global ** 2;
}

const pure = (x) => x ** 2;

// High Order Functions
// A higher order function is created by combining multiple functions together by passing functions as arguments or returning functions
// Anonymous
setTimeout( () => console.log('hello!'), 2000);

// Named
const log = () => console.log('hello');
setTimeout(log, 2000);

// Array Map 
[1,2,3,4].map(v => v ** 2);

// Recursive Function
// A recursive function is one that calls ifself from inside its own function body. If a terminationg condition is not provided it will create an infinite loop. Recursive functions are commonly used in algorithm inplementations to efficiently handle tasks like binary-free traversal
const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {

    const subfolders = fs.statSync(dir).isDirectory() 
                       && fs.readdirSync(dir);

    if (subfolders) {

        console.log('👟👟👟 Traversing ', dir);

        subfolders.forEach(path => {
            const fullPath = join(dir, path);

            traverse( fullPath );

            
        });
    }

}
traverse( process.cwd() );

// When should you write functions?
// "Dry Do Not Repeat Yourself"
// " WET Write Everything Twice, but not Thrice"