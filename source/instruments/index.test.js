import {sum, delay, getUniqueID, getFullApiUrl} from './';

jest.setTimeout(10000);

describe('Instruments:', () => {
    test('Expected that Sum to be a function', () => {
        expect(sum).toBeInstanceOf(Function)
    });

    test('Expected that Sum to throw error with non number argument1', () => {
        expect(() => sum('String', 1)).toThrow();
    });

    test('Expected that Sum to throw error with non number argument2', () => {
        expect(() => sum(1, 'String')).toThrow();
    });

    test('Expected that Sum to return the addition of two arguments', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(9, 3)).toMatchSnapshot();
    });


    test('Expected that Delay to throw a resolved promise', async () => {
        await expect(delay(5000)).resolves.toBeUndefined();
    });


    test('Expected that getUniqueID to be a function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('Expected that getUniqueID to throw error with non number argument', () => {
        expect(() => getUniqueID('String')).toThrow();
    });

    test('Expected that getUniqueID returns string of entered length', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(6)).toHaveLength(6);
    });


    test('Expected that getFullApiUrl to be a function', () => {
        expect(typeof getFullApiUrl).toBe('function');
    });

    test('Expected that getFullApiUrl throws error with non string argument1', () => {
        expect(() => getFullApiUrl(1, 'string')).toThrow();
    });

    test('Expected that getFullApiUrl throws error with non string argument2', () => {
        expect(() => getFullApiUrl('string', 1)).toThrow();
    });

    test('Expected that getFullApiUrl returns a string', () => {
        expect(typeof getFullApiUrl('string', 'string')).toBe('string');
    });
});


