// Problem statement :
// we have string we need to add a method to string as trueLenght() we gives actual letters except whitespace

let str1 = " hitesh   "; //sample exaple

String.prototype.trueLength = function () {
  console.log(`The true lenght: ${this.trim().length}`);
};

str1.trueLength();

let myarr = ["thanos", "batman"];

let powerHeros = { hero: "superman" };

//declaring new property object level will give access to fucntion,array , string
Object.prototype.newObjMessg = function () {
  console.log(`This object level Property`);
};

myarr.newObjMessg();
powerHeros.newObjMessg();

Array.prototype.newArrMessg = function () {
  console.log(`This Array level Property`);
};

myarr.newArrMessg();
//powerHeros.newArrMessg(); this is error object cannot access only array can access its property

//#############################   INHERITANCE #############################################//

const employee = {
  user: "employee",
  email: "employee@.com",
};

const department = {
  department: "development",
};

const presence = {
  isLoggedIn: true,
};

const QandA = {
  team: "testing",
};

// if we want properties of employee in department we can inherit using __proto__ (old method)

department.__proto__ = employee; // old method of using proto

console.log(`${department.user}`); // we are accessing the property of employee from the department

//Object.setPrototypeOf(employee, department); //cyclic prototype not possible

console.log(`${employee.department}`);

"ummar".trueLength();
