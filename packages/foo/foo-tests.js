'use strict';

function Foo() {
	this._container = {};
};
Foo.prototype.set = function(key, value) {
	this._container[key] = value;
};
Foo.prototype.get = function(key) {
	return this._container[key];
};

describe('Instantiating foo in "beforeEach"', function() {
	var foo;
	beforeEach(function() {
		foo = new Foo();
	});
	it('should set container', function() {
		foo.set('one', 1);
		foo.set('two', 2);
		expect(foo.get('one')).toBe(1);
		expect(foo.get('two')).toBe(2);
	});
	it('should set container', function() {
		foo.set('one', 1);
		expect(foo.get('one')).toBe(1);
		expect(foo.get('two')).toBe(undefined);
	});
	it('true is true', function() {
		expect(true).toBe(true);
	});
});

describe('Instantiating foo in "it"', function() {
	it('should set container', function() {
		var foo = new Foo();
		foo.set('one', 1);
		foo.set('two', 2);
		expect(foo.get('one')).toBe(1);
		expect(foo.get('two')).toBe(2);
	});
	it('should set container', function() {
		var foo = new Foo();
		foo.set('one', 1);
		expect(foo.get('one')).toBe(1);
		expect(foo.get('two')).toBe(undefined);
	});
});
