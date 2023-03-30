const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

//1
// module.exports = add

//2
module.exports = (a, b) => {
	return a + b;
};

//3
module.exports = {
  add: add, 
  subtract //ES6 feature when key and obj name same
}

// 4
/**
 * add module.export at each function
 */