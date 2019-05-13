'use strict';

const assert = require('assert');

const arr = [10,20,30];
function map(arr, callback) {
  //create an empty array into which you will push the new elements
    let newArray = [];
    //loop through the original array
    for (let i=0;i<arr.length;i++){
      //define a new variable equal to each element in the original array, each one will have a callback function applied to it
      let elements = callback(arr[i]);
      //push all of the new variables into the new, previously empty array
      newArray.push(elements);
    }
    //return new array with new elements
    return newArray;
  };

function reduce(array, callback, accumulator){
  //sets accumulator equal to itself if that is truthy, or equal to zero if it is not truthy
  accumulator = accumulator || 0;
  //looping through an array, one index position at a time
  for (let index=0; index<array.length; index++){
    //if the element in the array is a number type, then set the variable equal to itself plus the element's value
    if (typeof array[index] == 'number') {
      accumulator = accumulator + array[index];
      //otherwise, if the element in the array is an object, loop through the object properties to find the key value and add that to the accumulator
    } else if (typeof array[index] == 'object') {
      for (let i in array[index]){
        accumulator = accumulator + array[index][i]
      }
    }
    //then you create a function called a callback function that accepts all of these parameters
    callback(accumulator, array[index], index, array);
  }
  //return the accumulator variable, or the total value of the callback function
  return accumulator;
}


function filter(arr, callback) {
  //create an empty array
  let filteredArr = [];
  //loop through the original array
  for (let i=0;i<arr.length; i++){
      //checks to see if the conditions of the callback function are true, pushes values to new array if so
      if (callback(arr[i],i, arr) == true){
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}
