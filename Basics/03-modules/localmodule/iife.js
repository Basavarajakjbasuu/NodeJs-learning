(function () {
	const superHero = 'Batman';
	console.log(superHero);
})();

(function () {
	const superHero = 'Superman';
	console.log(superHero);
})();

/**
 * Before a module code is executed, Node.js will wrap it with a function wrapper that provides module scope
 * 
 * This saves us from having to worry about conflicting variables or functions
 *  so proper encapsulation and reusability is unaffected
 */
