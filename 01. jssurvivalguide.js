console.log('hello world')

// primatives and objects
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "23");
console.log(typeof undefined);
console.log(typeof null);

// undefined is the default value of a vaiable if it isn't assigned
var x;

console.log(x)

// undefined is also used when a function returns nothing
function x() {}

console.log( x() )

// null represents an empty value but has to be assigned
var x = null;

console.log(x)

// objsects can be seen as keys and values
console.log(typeof [])
console.log(typeof {})

// objects can be mutated after it is assigned to a variable
var x = {};

x['foo'] = 'bar'

console.log(x);

// if it is not a primitive, it is an object

var x = true

if (true) {
    x = 1;
} else {
    x = 2;
}

// Truthy vs Falsy
true; // true
!! "hello"; // true
!! -1; // true
!! []; // true
!! {}; // true

false; // false
!! null; // false
!! undefined; // false
!! 0; // false
!! ""; // false

// ternary operator
var x = true ? 1 : 2;

// try & catch
try {
    console.log('works')
} catch (error) {
    console.log('broke')
}

// error in a try & catch
try {
    throw new Error();
    console.log('works')
} catch (error) {
    console.log('broke')
}

// finally block always executes after try & catch
try {
    throw new Error();
    console.log('works')
} catch (error) {
    console.log('broke')
} finally {
    console.log('always works')
}

// hoisting, javascript puts all variable and functions at the top
console.log(y);
// always declare variable at the top of the context
var y

// let is limited to that block
if (true) {
    //block
    let w = 23;
    console.log(w)
}

// compared to var, can leak outside of the scope
if (true) {
    //block
    var w = 23;
    console.log(w)
}

console.log(w)

// closure is a function in a function, where the outer function's local variables remain avaliable in memory after creation
// If you come from a classical OOP background, you may notice how closure is very similar to a class instance with properties and methods.
function outer() {

    let count = 0; // persists in memory after outer is popped off the call stack

    function inner() {
        count++;
        return count;
    }

    return inner;
}

// Creates the Closure
const addOne = outer();

// Operates within its context or lexical environment
addOne(); // 1
addOne(); // 2
addOne(); // 3