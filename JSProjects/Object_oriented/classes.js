class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }

  encryptPass() {
    console.log(`the pass is ${this.pass}a##c`);
  }
  loggedUser() {
    console.log(`Welcome ${this.username}`);
  }
}

const userOne = new User("ummar", "gmail.com", 1333);
console.log(userOne);

userOne.encryptPass();
