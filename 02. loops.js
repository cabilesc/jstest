const arr = ['badger', 'beaver', 'baboon']

// old way to loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// modern way to loop
for (const e of arr) {
    console.log(e)
}

// for each
arr.forEach( v => console.log)

//Nested For loops
for ( let i = 1; i <= 10; i++) {
    console.log(i)
    for (let j = 1; j < 4; j++) {
        console.log(j)
    }
}

// while loop
let count = 1;
while (count < 11) {
    console.log(count)
    count++;
}