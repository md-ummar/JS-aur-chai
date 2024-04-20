//**********interview Important******** */
//Problem Statement: Math.PI has value 3.141.... can we cange if not why?

//Object has certain properties which are disabled from the JS, to check which properties are enabled and disabled
// we have Object.getOwnPropertyDescriptor('object_name', 'object_key')

const pi = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(pi);

// we have properties like:
//writable, value, enumerable , configurable , etc
// we can change this properties to our own declared object

const newObject = {
  username: "ummar",
};

console.log(Object.getOwnPropertyDescriptor(newObject, "username"));

// to change object property:
Object.defineProperty(newObject, "username", {
  writable: false,
});

newObject.username = " string";
console.log(newObject.username);
