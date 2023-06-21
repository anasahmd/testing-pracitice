import reverseString from '../scripts/reverse-string';

test('Expect lorem to be merol', () => {
	expect(reverseString('lorem')).toBe('merol');
});

test('Reverse String', () => {
	expect(reverseString('Main')).toBe('niaM');
});

test('Expect lorem to be merol', () => {
	expect(reverseString('carry')).toBe('yrrac');
});
