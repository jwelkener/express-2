// Import the timeToWords function from the timeWord module
const timeToWords = require('./timeWord');

// Test Suite
describe('timeToWords Function', () => {
  test('it is a function', () => {
    expect(typeof timeToWords).toBe('function');
  });

  // You can add more test cases or describe blocks here
  test('00:00 should be midnight', () => {
    const output = timeToWords('00:00');
    expect(output).toBe('midnight');
  });

  test('12:00 should be noon', () => {
    const output = timeToWords('12:00');
    expect(output).toBe('noon');
  });

  
});

// Test Cases
const testCases = [
  ['00:00', 'midnight'],
  ['00:12', 'twelve twelve am'],
  ['01:00', 'one o’clock am'],
  ['06:01', 'six oh one am'],
  ['06:10', 'six ten am'],
  ['06:18', 'six eighteen am'],
  ['06:30', 'six thirty am'],
  ['10:34', 'ten thirty four am'],
  ['12:00', 'noon'],
  ['12:09', 'twelve oh nine pm'],
  ['23:23', 'eleven twenty three pm']
];

// Run tests
testCases.forEach(([input, expectedOutput]) => {
  test(`Input: ${input} - Expected Output: ${expectedOutput}`, () => {
    const output = timeToWords(input);
    expect(output).toBe(expectedOutput);
  });
});
