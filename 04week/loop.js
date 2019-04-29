// Use a do...while loop to console.log the numbers from 1 to 1000.
let n = 0;
do {
    n += 1
    console.log(n) 
} while (n<1000);

// Create an object (an array with keys and values) called person with the following data:

// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: ["Jan 5, 1925", "Jan 6, 1926"],
    gender: "female",
}

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

let oddNumbers = [1,3,5,7,9];
let i = "";
for (i in person) {
  for (n=0;n<person[i].length; n++) {
    if ([1,3,5,7,9].includes(person[i][n].slice(-1))==true){
        console.log("yes");
    }
  }
}

/* Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person 
object you made above multiple times. Feel free to change the values to reflect multiple people 
you might have in your database.
*/

let arrayOfPersons = [
    {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: ["Jan 5, 1925"],
      gender: "female",
   }, 
    {
      firstName: "John",
      lastName: "Doe",
      birthDate: ["Jan 5, 1927"],
      gender: "male",
  }, 
    {
      firstName: "Janet",
      lastName: "Done",
      birthDate: ["Jan 1, 1991"],
      gender: "female",
  }, 
]

// Use .map() to map over the arrayOfPersons and console.log() their information.
arrayOfPersons.map(x => console.log(x))

// Use .filter() to filter the persons array and console.log only males in the array.
arrayOfPersons.filter(x => console.log(x.gender == 'male'))

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
function year() {
    for (i=0;i<arrayOfPersons.length;i++) {
      for (n=0; n<arrayOfPersons[i].birthDate.length; n++) {
        let birthYear = arrayOfPersons[i].birthDate[n].slice(-4);
      if(birthYear < 1990) {
        console.log(birthYear)
      }
    }
    }
  }
  //Was working on this one and ran out of time.
  arrayOfPersons.filter(year => ...)
  