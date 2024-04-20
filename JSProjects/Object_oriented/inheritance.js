class User {
  constructor(username) {
    this.username = username;
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }

  addCourse() {
    console.log(`the Course is added by ${this.username}`);
  }
}

const teacherOne = new Teacher("abbcd", "t@.com", 112233);

console.log(teacherOne.addCourse());
