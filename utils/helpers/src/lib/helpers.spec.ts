import * as helpers from './helpers';

describe('reverseString', () => {
  it('basic use', () => {
    expect(helpers.reverseString('helpers')).toBe('srepleh');
  });
  it('with upper case', () => {
    expect(helpers.reverseString('Helpers')).toBe('srepleH');
  });
  it('with empty string', () => {
    expect(helpers.reverseString('')).toBe('');
  });
});