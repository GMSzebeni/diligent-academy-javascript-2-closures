// Simple Closure

function createCouter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

const counter = createCouter();

//counter()
//counter()

// Private Variables

function createPrivateCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);

        }
    }
}

const counter2 = createPrivateCounter();
//counter2.increment();
//counter2.increment();

// Delayed Execution

function delayMessage(message, delay) {
    return function () {
        setTimeout(() => {
            console.log(message);
        }, delay)
    }
}

const delayedGreeting = delayMessage('Hello World!', 2000);
//delayedGreeting();

// Memory and References

function createStorage() {
    const data = [];
    return {
        add: (item) => data.push(item),
        get: () => data
    }
}

const storage = createStorage();
/* storage.add('Borsó')
storage.add('dog')
console.log(storage.get()); */

// Currying

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...moreArgs) => curried(...args, ...moreArgs)
        }
    }
}

function sum(a, b) {
    return a + b;
}

const add5 = curry(sum)(5);
//console.log(add5(3));

// Modifiable Closures

function createCounter3() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    }
}

const counter3 = createCounter3();
counter3.increment();
counter3.decrement();
//console.log(counter3.getCount());

// Recursive Closures

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoize = (fn) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const memoizedFibonacci = memoize(fibonacci);
/* console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10)); */


function square(n) {
    return n * n;
}

const memoizedSquare = memoize(square);
//console.log(memoizedSquare(10));

function logger(prefix) {
    return function (target) {
        return function (...args) {
            console.log(`${prefix}: ${target.name} called with args: ${args}`);
            return target.apply(this, args);
        }
    }
}

function add(a, b) {
    return a + b;
}

const loggedAdd = logger('Add operation')(add);

const result = loggedAdd(3, 4);
console.log(result);

const loggedSquare = logger('Mamma mia')(square);

loggedSquare(33)
