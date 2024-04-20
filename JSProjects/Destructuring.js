// #############################Destructuring::::::;

//Array destucturing:

const userName = ["Mohammed", "Ummar"];

//to output first name and last name seperately we used old method like:

/*** 
const firstName = userName[0]; //old method without destructure
const lastName = userName[1];

*/
//INSTEAD BY USING DESTRUCTURING

const [firstName, lastName] = ["Mohammed", "ummar"];

console.log(firstName);
console.log(lastName);

//######### Object Destructuting

//OLD METHOD WITHOUT DESTRUCTURING

const user = {
  name: "ummar",
  age: 24,
  sex: "Male",
};

/****
 const userName = user.name;
 const age = user.age;
 const gender = user.sex;
 */

//########### BY DESTRURING

const {
  username: name,
  age,
  gender,
} = {
  //username: name is aliasing
  username: "ummar",
  age: 24,
  gender: "male",
};

console.log(name);
