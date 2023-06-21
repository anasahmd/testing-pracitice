import analyzeArray from '../scripts/analyzeArray';

test('Test 1', () => {
	expect(analyzeArray([1, 2, 3, 6])).toStrictEqual({
		average: 3,
		min: 1,
		max: 6,
		length: 4,
	});
});

test('Test 2', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('Test 3', () => {
	expect(analyzeArray([63, 29, 35, 11, 5])).toStrictEqual({
		average: 28.6,
		min: 5,
		max: 63,
		length: 5,
	});
});
