// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
	expect(functions.isPhoneNumber('(858)888-8888')).toBe(true);
	expect(functions.isPhoneNumber('858-555-2220')).toBe(true);
	expect(functions.isPhoneNumber('(858)888-88')).toBe(false);
	expect(functions.isPhoneNumber('(858)88812313')).toBe(false);
});
test('isEmail', () => {
	expect(functions.isEmail('jihsu@ucsd.edu')).toBe(true);
	expect(functions.isEmail('jonathanihsu@gmail.com')).toBe(true);
	expect(functions.isEmail('adfal.cd@')).toBe(false);
	expect(functions.isEmail('dfad-cda.dd&&')).toBe(false);
});
test('isStrongPassword', () => {
	expect(functions.isStrongPassword('Jjjlddf')).toBe(true);
	expect(functions.isStrongPassword('jnn2340fd')).toBe(true);
	expect(functions.isStrongPassword('&*#&*$&*')).toBe(false);
	expect(functions.isStrongPassword('jfahdfjadfhakfhkda')).toBe(false);
});
test('isDate', () => {
	expect(functions.isDate('10/31/2002')).toBe(true);
	expect(functions.isDate('5/6/2012')).toBe(true);
	expect(functions.isDate('32/1231/123')).toBe(false);
	expect(functions.isDate('1341/413/13')).toBe(false);
});

test('isHexColor', () => {
	expect(functions.isHexColor('#574240')).toBe(true);
	expect(functions.isHexColor('#ffffff')).toBe(true);
	expect(functions.isHexColor('#fadf23rfq')).toBe(false);
	expect(functions.isHexColor('#f')).toBe(false);
});