import {sum, delay, getUniqueID} from './';

jest.setTimeout(10000);

describe('Instruments:', () => {
    test('Expect Sum to be a function', () => {
        expect(sum).toBeInstanceOf(Function)
    });

    test('Expect Sum to throw error with non number argument1', () => {
        expect(() => sum('String', 1)).toThrow();
    });

    test('Expect Sum to throw error with non number argument2', () => {
        expect(() => sum(1, 'String')).toThrow();
    });

    test('Expect Sum to return the addition of two arguments', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(9, 3)).toMatchSnapshot();
    });


    test('Expect Delay to throw a resolved promise', async () => {
        await expect(delay(5000)).resolves.toBeUndefined();
    });


    test('Expect getUniqueID to be a function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('Expect getUniqueID to throw error with non number argument', () => {
        expect(() => getUniqueID('String')).toThrow();
    });

    test('Expect getUniqueID returns string of entered length', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(6)).toHaveLength(6);
    });
});


