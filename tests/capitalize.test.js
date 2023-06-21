import capitalize from '../scripts/capitalize';

test('hello expected to be Hello', () => {
	expect(capitalize('hello')).toBe('Hello');
});

test('where to be Where', () => {
	expect(capitalize('where')).toBe('Where');
});
