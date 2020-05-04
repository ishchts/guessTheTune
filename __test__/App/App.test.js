function sum(a, b) {
	return a + b;
}

describe('test', () => {
	test('summ', () => {
		expect(sum(2,2)).toBe(4);
	});
});