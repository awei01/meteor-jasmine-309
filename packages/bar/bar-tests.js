'use strict';

describe('Bar', function() {
	var bar;
	beforeEach(function() {
		bar = new Bar('value');
	});
	it('.getValue() returns value', function() {
		expect(bar.getValue()).toBe('value');
	});
	it('some other test', function() {
		expect(true).toBe(true);
	});
});
