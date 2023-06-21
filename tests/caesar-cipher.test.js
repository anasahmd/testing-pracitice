import caesarCipher from '../scripts/caesar-cipher';

test('Test 1', () => {
	expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('Test 2', () => {
	expect(caesarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
});

test('Test 3', () => {
	expect(caesarCipher('Love you 3000!', 7)).toBe('Svcl fvb 3000!');
});

test('Test 4', () => {
	expect(caesarCipher('What to test?', 15)).toBe('Lwpi id ithi?');
});

test('Test 5', () => {
	expect(caesarCipher("I think it's good enough.", 35)).toBe(
		"R cqrwt rc'b pxxm nwxdpq."
	);
});
