const addFunction = require('./add'); //7
// require("./add.js") //7

/**
 * Common Js
 * its adopted technique from common js to import local module by require function
 */

const sum = addFunction(1, 2);
console.log(sum);

const sum2 = addFunction(1, 5);
console.log(sum2);

/**
 * IIFE = Before a module code is executed, Node.js will wrap it with a function wrapper that provides module scope
 *
 * This saves us from having to worry about conflicting variables or functions
 *  so proper encapsulation and reusability is unaffected
 */

require('./batman');
require('./superman');

/**
 * MODULE CASHING
 */

// const superHero = require("./super-hero")
// console.log(superHero.getName()) //Batman
// superHero.setName("Common man")
// console.log(superHero.getName()) //Common man

// const newSuperHero = require("./super-hero")

// console.log(newSuperHero.getName()) //Common man - objet are pass by reference

//-------------------------------------------------

const SuperHero = require('./super-hero');

const batman = new SuperHero('Batman');
console.log(batman.getName());
batman.setName('Bruce wayne');
console.log(batman.getName());

const superman = new SuperHero('super man');
console.log(superman.getName());
superman.setName('Bassu');
console.log(superman.getName());

/**
 * IMPORT EXPORT Patterns
 */

// const add = require('../math');

// console.log(add(2, 3));

const math = require('../math');
console.log(math.add(2, -4)) //-2
console.log(math.subtract(2, -2)) //4

// extraction
const { add, subtract } = math

console.log(add(3, -3))
console.log(subtract(2, 1))
