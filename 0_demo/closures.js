//Simple closure

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
const counter2 = createCounter();

// createCounter();
// createCounter();

// createCounter()();
// createCounter()();

// counter();
// counter();

// counter2();
// counter2();

function createPrivateCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(count);
        }
    }
}

const counter3 = createPrivateCounter();
// counter3.increment();
// counter3.increment();

function delayMessage(message, delay) {
    return function () {
        setTimeout(() => {
            console.log(message);
        }, delay)
    }
}

const delayedGreating = delayMessage("Hello", 2000);
delayedGreating;

function createStorage() {
    const data = [];
    return {
        add: (item) => data.push(item),
        get: () => data
    }
}

// függvény length - hány paramétert vár az adott függvénytől

const storage = createStorage();
storage.add("borsó");
storage.add("répa");
//console.log(storage.get());

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...moreArgs) => curried(...args, ...moreArgs);
        }
    }
}

function sum(a, b) {
    return a + b;
}

const add5 = curry(sum)(5);
//console.log(add5(3));

//Adjustable Closures

function createCounter3() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        get: () => count
    }
}

const counter4 = createCounter3();
counter4.increment();
//console.log(counter4.get());
counter4.decrement();
//console.log(counter4.get());

//Recursive

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
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
// console.log(memoizedFibonacci(10));
// console.log(memoizedFibonacci(10));

//hoising -- futtatáskor a javascriptben és a varral létrehozott változók előbb jönnek létre, mint hogy a függvények lefutnának


//logger dekorátor
function logger(prefix) {
    return function (target) {
        return function(...args) {
            console.log(`${prefix} : ${target.name} called with args: ${args}`);
            return target.apply(this, args); //apply meghívja a függvényt
        }
    }
}

function add(a, b) {
    return a + b;
}

const loggedAdd = logger("Add operation")(add);

const result = loggedAdd(3, 4);

console.log(result);

// const loggedFibonacci = logger("mamma mia")();

// const result2 = loggedFibonacci;

// console.log(result2);