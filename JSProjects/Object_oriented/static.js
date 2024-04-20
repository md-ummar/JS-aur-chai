// static

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Welcome! ${this.username}`);
  }
  static createId() {
    console.log(`123`);
  }
}

const userOne = new User("ummar");

userOne.logMe();
//userOne.createId(); // we cannot access the method when its declared as static, by this we can add limitations
