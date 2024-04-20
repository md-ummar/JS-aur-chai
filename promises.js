// Promise
//It is used for Async task
//DB calls, network, cryptography

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise Async 1 Executed");
//     resolve();
//   }, 5000);
// });

// promiseOne.then(() => {
//   console.log("Promiseone Done");
// });

//Promise without storing in variable

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`Promise Async 2 executed`);
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log(`Promise 2 Done`);
// });

//promise where the data is collected has to be passed in then method
// we can pass any type of parameter to collect the data

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ username: "ummar", email: "example.com" });
//   }, 2000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

//posmise
//Promise creation:::

//---------Promise consuption using then and catch------------
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => console.log(username))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("promise four executed"));

//---------Promise Creation--------------
// const promiseFive = new Promise((resolve, reject) => {
//   let error = false;
//   setTimeout(() => {
//     if (!error) {
//       resolve({ username: "hitesh", pass: "12345" });
//     } else {
//       reject("Error: JS did not execute");
//     }
//   }, 1000);
// });

// //--------prmoise consuption using async function and inside function using try catch block---------

// async function promise5() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promise5();

//*****************for json file fetch using await and converting to json using await */
// let error;
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.cypress.io/todos/1");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("E:", err);
//   }
// }

// getAllUsers();

/*************The above solved using the fetch and then and catch */
fetch("https://jsonplaceholder.cypress.io/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
