import {getFormattedValue} from '../shared/utils';

test('getFormattedValue should work', () => {
    const res = getFormattedValue('1234.0');
    const expected = '1,234.0';
    expect(res).toEqual(expected);
});