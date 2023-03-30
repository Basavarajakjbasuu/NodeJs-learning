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


/**
 * IIFE = Before a module code is executed, Node.js will wrap it with a function wrapper that provides module scope
 * 
 * This saves us from having to worry about conflicting variables or functions
 *  so proper encapsulation and reusability is unaffected
 */

require("./batman")
require("./superman")