import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Try to count for the correct result:', () => {
    it('It should can sum two numbers correctly', () => {
        const numberA = 2;
        const numberB = 3;

        const actualValue = sum(numberA, numberB);
        const expectedValue = 5;

        assert.equal(actualValue, expectedValue);
    });

    it('It should give result as 0 if string passed on numberA parameter', () => {
        const numberA = '3';
        const numberB = 5;

        const actualValue = sum(numberA, numberB);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });

    it('It should give result as 0 if string passed on numberB parameter', () => {
        const numberA = 4;
        const numberB = '6';

        const actualValue = sum(numberA, numberB);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });

    it('It should give result as 0 if negative number passed on numberA parameter', () => {
        const numberA = -7;
        const numberB = 5;

        const actualValue = sum(numberA, numberB);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });

    it('It should give result as 0 if negative number passed on numberB parameter', () => {
        const numberA = 6;
        const numberB = -10;

        const actualValue = sum(numberA, numberB);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });
});