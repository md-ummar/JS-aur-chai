// import is used for importing properties and methods from other javascript files:

import { apiKey } from "./export"; // named export should be imported as shown

import key from "./export"; // importing the export default value as key

// importing multiple named export:
//import { apiKey, abt as mainKey } from "./export";

import * as util from "./export"; //importing everything as object named util.

console.log(util.apiKey);
