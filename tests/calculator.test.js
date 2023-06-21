import calculator from '../scripts/calculator';

test('Add 1 and 2', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('Subtract 1 and 2', () => {
	expect(calculator.substract(1, 2)).toBe(-1);
});

test('Divide 1 and 2', () => {
	expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Multiply 1 and 2', () => {
	expect(calculator.multiply(1, 2)).toBe(2);
});
