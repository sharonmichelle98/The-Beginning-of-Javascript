import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test ('This operation should give correct result', () => {
    //Define the parameters
    const numberA = 3;
    const numberB = 4;

    //Define the actual value and expected value
    const actualValue = sum(numberA, numberB);
    const expectedValue = 7;

    assert.equal(actualValue, expectedValue);
});