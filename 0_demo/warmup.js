function reduce(array, func, iv) {
  let result = iv !== undefined ? iv : array[0];

  for(let i = iv !== undefined ? 0 : 1; i < array.length; i++) {
    result = func(result, array[i]);
  }

  return result;
}

const nums = [2012,132,13,13,50,124]

console.log(reduce(nums, (acc, curr) => {return acc + curr}, 0))