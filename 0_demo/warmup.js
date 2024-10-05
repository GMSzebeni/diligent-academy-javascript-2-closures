function reduce(array, func, iv) {
  let result = iv !== undefined ? iv : array[0];

  for(let i = iv !== undefined ? 0 : 1; i < array.length; i++) {
    result = func(result, array[i]);
  }

  return result;
}

const nums = [2012,132,13,13,50,124]

console.log(reduce(nums, (acc, curr) => {return acc + curr}, 0))

/*1. Custom Map Implementation

Task: Write a function named `modifyArray` that takes an array and a callback function as parameters. 
The callback function will modify each element of the array. The modifyArray function should return the new, modified array.*/

function modifyArray(arr, modify) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
      newArray.push(modify(arr[i]));
  }

  return newArray;
}

function addOne(element) {
  return element + 1;
}

console.log(modifyArray([1,2,3,4], addOne));

/*2. Custom Filter

Task: Write a function named `filterElements` that takes an array and a callback function as parameters. 
The callback function should return true or false for each element. The filterElements function should return an array 
containing only the elements for which the callback returned true.*/

function filterElements(arr, modify) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
      if (go(arr[i])) {
          newArray.push(modify(arr[i]));
      }
  }

  return newArray;
}

function go(element) {
  if (element === "green") {
      return true;
  } else {
      return false;
  }
}

console.log(filterElements(["red", "green", "purple", "green", "black", "green", "pink", "red", "blue"], go));

/*3. Custom Reduce

Task: Write a function named `sumArray` that takes an array and a callback function as parameters. 
The callback function should return a number for each element. The sumArray function should return the sum of all the 
values returned by the callback.*/

function sumArray(arr, modify) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += (modify(arr[i]));
  }

  return sum;
}

function number(element) {
  return element[0];
}

console.log(sumArray([[1, "text"],[2, "text"],[3, "text"],[4, "text"],[5, "text"]], number));


function sumArray2(arr, modify, iv) {
  let sum = iv !== undefined ? iv : arr[0];

  for (let i = iv !== undefined ? 0 : 1; i < arr.length; i++) {
      sum = modify(sum, arr[i]);
  }

  return sum;
}

const arr = [1,2,3,4,5];

console.log(sumArray2(arr, (acc, curr) => acc + curr));