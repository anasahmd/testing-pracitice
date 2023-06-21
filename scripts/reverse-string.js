const reverseString = (string) => {
	let stringArray = string.split('');
	let reverseArray = stringArray.reverse();
	let reverseString = reverseArray.reduce(
		(string, current) => string + current
	);
	return reverseString;
};

export default reverseString;
