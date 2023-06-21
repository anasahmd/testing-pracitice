const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const caesarCipher = (string, factor) => {
	let stringArray = string.split('');
	let encryptedArray = stringArray.map((letter) => {
		//Checks if letter is present in letters array whether uppercase or lowercase
		if (letters.includes(letter.toLowerCase())) {
			if (letter == letter.toUpperCase()) {
				let lowerCaseLetter = letter.toLowerCase();
				letter = letters[(letters.indexOf(lowerCaseLetter) + factor) % 26];
				return letter.toUpperCase();
			}
			return (letter = letters[(letters.indexOf(letter) + factor) % 26]);
		} else {
			return letter;
		}
	});
	let encryptedString = encryptedArray.reduce(
		(string, current) => string + current
	);

	return encryptedString;
};

export default caesarCipher;
