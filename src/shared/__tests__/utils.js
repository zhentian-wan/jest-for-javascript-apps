import {getFormattedValue} from '../utils.js';

test('getFormattedValue should work', () => {
    const res = getFormattedValue('1234.0');
    const expected = '1,234.0';
    expect(res).toEqual(expected);
});

console.log(window);