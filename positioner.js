/**
 * 
 * @param {*} number 
 * positioner is a script that helps pad a number with the correct position value
 * position value in this regard would be something lke first, second, third e.t.c
 * Author: Olusegun Akinyelure
 */


 // This
function Positioner() {

	// Checks if the value passed is a supported data type.
	this.isValidType = function() {
		let possibleTypes = ["string","number"]
		return (possibleTypes.includes(typeof this._number));
	}
}

/**
 * @param key
 * this.get()
 */
Positioner.prototype.get = function(number) {
	let self = this; // get current instance of Positioner. Needed for scope
	this._number = number; // put number is the global scope so that other children may have access
	if(!this.isValidType()) {
		throw TypeError(`${typeof this._number} not a valid type`);
	}
	let exceptions = ["1","2","3"]; // These numbers have different suffix
	let stringifiedNumber = this._number.toString(); // convert to string in case number is passed

	lastIndexOfNumber = stringifiedNumber.length - 1;

	if(exceptions.includes(stringifiedNumber[lastIndexOfNumber])) {
		return `${this._number}${this.pair(stringifiedNumber[lastIndexOfNumber])}`;
	}
	return `${this._number}th`;
}

/***
 * @param key
 * Uses a hashtable to get the values whose suffix are different
 * @throws ReferenceError
 */
Positioner.prototype.pair = function(key) {
	let possibleValues = {
		1: "st",
		2: "nd",
		3: "rd"
	};
	if(possibleValues[key] == undefined || possibleValues[key] == null) {
		throw new ReferenceError("Invalid position referenced");
	}
	return possibleValues[key];
}

module.exports = Positioner;