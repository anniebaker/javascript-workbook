'use strict';
//Length
let cars = ['Ford', 'Toyota', 'BMW', 'Volvo'];
console.log(cars.length);
console.log('hello!')

//Concat
let moreCars = ['Porsche', 'Mercedes', 'Tesla', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

//indexOf & lastIndexOf
console.log(moreCars.indexOf('Honda'));
console.log(cars.lastIndexOf('Ford'));

//Join
let stringOfCars = totalCars.join(', ');
console.log(stringOfCars);

//Split
let total = stringOfCars.split(', ');
console.log(total);

//Reverse
let carsInReverse = total.reverse();
console.log(carsInReverse);

//Sort
let sortCars = carsInReverse.sort();
console.log(sortCars);
console.log(carsInReverse)

//Slice
let newArray = carsInReverse.slice(1,3);
console.log(newArray)

//Splice
let splicedArr = carsInReverse.splice(2,3);
console.log(splicedArr);
carsInReverse.splice(2,0, "Ford", "Honda");
console.log(carsInReverse);

//Push
carsInReverse.push(splicedArr[0]);
carsInReverse.push(splicedArr[1]);
console.log(carsInReverse);

//Shift
let firstEl = carsInReverse.shift();
console.log(firstEl);

//Unshift
carsInReverse.unshift("Ferrari");
console.log(carsInReverse);

//forEach
//Write code that will add 2 to each item in the array numbers
/* forEach requires a function to be passed into it as its first argument. 
Build a function that will add 2 and then use .forEach() to pass 
each number into your freshly built function. */

const arr = [23, 45, 0, 2];
arr.forEach(function(item){
    console.log(item += 2);
});
console.log(plusTwo);

const plusTwo = []
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(function(item){
    plusTwo.push(item += 2);
});
console.log(plusTwo);
// const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]