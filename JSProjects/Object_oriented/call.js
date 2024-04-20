// when a function1 is called inside an fucntion2 the execution context is wiped and variables are free
// to pass on the reference of function1 variables to use in function2 we use call and this

//############ EXAMPLE ##########//

function setUsername(username) {
  this.username = username;
}

function createUser(username, email, pass) {
  setUsername.call(this, username);
  this.email = email;
  this.pass = pass;
}

const newUser = new createUser("ummar", ".com", 1234);
console.log(newUser);
