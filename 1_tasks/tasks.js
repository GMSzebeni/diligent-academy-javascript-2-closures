/*1. Memoization:

Implement a `memoize` function that takes another function as an argument and returns a memoized version of it. 
The memoized function stores the results of previous calls and returns the stored value if called with the same arguments again. 
This is particularly useful for expensive calculations or when the same calculation needs to be performed multiple times with the same input.*/

function square(a) {
    return a * a;
}

function memoize(fn) {
    const cache = {};
    return (number) => {
        if (number in cache) {
            return cache[number];
        } else {
            const result = fn(number);
            cache[number] = result;
            return result;
        }
    }
}

const memoizedSquare = memoize(square);
//console.log(memoizedSquare(2));
//console.log(memoizedSquare(2));


/*2. Currying:

Implement a `curry` function that transforms a function taking multiple arguments into a sequence of functions each taking a single argument. 
This is helpful when a function has many optional arguments or when you want to partially apply a function.
Partial application:
Create a partial function that partially applies a function. This is useful when a function has many arguments but you only want to fix some of them.*/

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...moreArgs) => curried(...args, ...moreArgs);
        }
    }
}

function multiply(a, b, c) {
    return a * b * c;
}

let curriedMultiply = curry(multiply)(2);
curriedMultiply = curriedMultiply(3);
//console.log(curriedMultiply(4));

/*3. Debouncing:

Implement a `debounce` function that takes a function as an argument and returns a new function that only calls the original function 
after a certain amount of time has passed. This is useful for example in search boxes where you don't want to send a request to the server 
after every keystroke.*/

function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function sendMessage(message) {
    console.log( `This is my message: ${message}`);
}

const myMessage = debounce(sendMessage, 2000);
// myMessage("Live ");
// myMessage("Live long ");
// myMessage("Live long and prosper!");

/*4. Throttling:

Create a `throttle` function that takes a function as an argument and returns a new function that calls the original function at most 
once within a given time interval. This is useful when an event is triggered frequently, but you only want to react to it at a certain rate.*/

function throttle(fn, delay) {
    let lastCallTime = 0;

    return (...args) => {
        const now = Date.now();
        if (now - lastCallTime >= delay) {
            lastCallTime = now;
            fn.apply(this, args);
        }
    }
}

function echo(echo) {
    console.log(echo);
}
const myEcho = throttle(echo, 2000);
myEcho("Du ");
myEcho("Du hast ");
myEcho("Du hast mich.");

/*5. Promise handling:

Create a `promisify` function that converts a callback-based function to a promise.
Create an allSettled function that takes an array of promises and returns a new promise that resolves with an array containing the status of each promise.*/

/*6. Error handling:

Create a `tryCatch` function that takes a function as an argument and tries to execute it. If an error occurs, the tryCatch function 
returns a new promise that contains the error.*/