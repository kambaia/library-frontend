import isObject from './';

describe.each([
  ['lorem', 'string', false],
  [23, 'number', false],
  [() => null, 'function', false],
  [[], 'array', false],
  [{}, 'object', true],
  [true, 'boolean', false],
  [null, 'null', false],
  [undefined, 'undefined', false],
  [NaN, 'NaN', false],
  [new Map(), 'Map', false],
  [new Set(), 'Set', false],
  [Symbol('lorem'), 'Symbol', false],
])('isObject', (value, valueName, result) => {
  it(`for ${valueName} should return ${result}`, () => {
    const call = isObject(value);
    expect(call).toBe(result);
  });
});
