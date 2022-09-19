// import {sum} from '../formValidator.js';
const {sum, mult} = require('../formValidator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('adds 2 * 5 to equal 10', () => {
    expect(mult(2,5)).toBe(10);
});