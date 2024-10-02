# Purpose of the Library:

Create a library containing various utility functions that rely on closures. These functions can assist with common tasks in everyday JavaScript development.

## Subtasks:

1. Memoization:

Implement a `memoize` function that takes another function as an argument and returns a memoized version of it. The memoized function stores the results of previous calls and returns the stored value if called with the same arguments again. This is particularly useful for expensive calculations or when the same calculation needs to be performed multiple times with the same input.

2. Currying:

Implement a `curry` function that transforms a function taking multiple arguments into a sequence of functions each taking a single argument. This is helpful when a function has many optional arguments or when you want to partially apply a function.
Partial application:
Create a partial function that partially applies a function. This is useful when a function has many arguments but you only want to fix some of them.

3. Debouncing:

Implement a `debounce` function that takes a function as an argument and returns a new function that only calls the original function after a certain amount of time has passed. This is useful for example in search boxes where you don't want to send a request to the server after every keystroke.

4. Throttling:

Create a `throttle` function that takes a function as an argument and returns a new function that calls the original function at most once within a given time interval. This is useful when an event is triggered frequently, but you only want to react to it at a certain rate.

5. Promise handling:

Create a `promisify` function that converts a callback-based function to a promise.
Create an allSettled function that takes an array of promises and returns a new promise that resolves with an array containing the status of each promise.

6. Error handling:

Create a `tryCatch` function that takes a function as an argument and tries to execute it. If an error occurs, the tryCatch function returns a new promise that contains the error.