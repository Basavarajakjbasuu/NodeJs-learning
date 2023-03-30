const addFunction = require("./add") //7
// require("./add.js") //7

/**
 * Common Js
 * its adopted technique from common js to import local module by require function
 */

const sum = addFunction(1, 2);
console.log(sum)

const sum2 = addFunction(1, 5);
console.log(sum2)