(function (message) {
	const superHero = 'Batman';
	console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = 'Superman';
  console.log(message, superHero);
})('Hey');

/**
 * Before a module code is executed, Node.js will wrap it with a function wrapper that provides module scope
 * 
 * This saves us from having to worry about conflicting variables or functions
 *  so proper encapsulation and reusability is unaffected
 */
