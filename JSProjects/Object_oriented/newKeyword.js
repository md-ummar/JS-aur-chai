function User(username, isLoggedIn, pass) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.pass = pass;
  return this;
}

//when we change the parameters the other variable also get updated and return the latest.
// we need to use new keyword (constructor function) which creates seperate object for both variables.

// let userOne = User("hitesh", false, 123);
// let userTwo = User("Ummar", false, 1234);

const userOne = new User("hitesh", false, 123);
const userTwo = new User("Ummar", false, 1234);

console.log(userOne);
console.log(userOne instanceof User);

function teaOrCoffee(name, price) {
  this.name = name;
  this.price = price;
}

//We can inject a fucntion from outside by using prototype

teaOrCoffee.prototype.printPrice = function printMe() {
  console.log(`price is: ${this.price}`);
};

const orderOne = teaOrCoffee("tea", 10);

// orderOne.printPrice();

// const userDetails = {
//   username: "ummar",
//   id: 1234,
//   present: true,
// };

// userDetails.printMessage = function () {
//   console.log(`Welcome ${this.username}`);
// };

// // userDetails.printMessage();

// const User1 = new userDetails();

// User1.username = "hitesh";

// console.log(User1.username);
// console.log(userDetails.username);
