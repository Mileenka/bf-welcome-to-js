'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

'use strict';

// /* Bouncify */

const bouncifyText = (text) => {
  let bouncified = '';
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (/[a-zA-Z]/.test(char)) {
      if (count % 2 === 0) {
        bouncified += char.toUpperCase();
      } else {
        bouncified += char.toLowerCase();
      }
      count++;
    } else {
      bouncified += char;
    }
  }

  return bouncified;
};

/* Test cases */

const testCases = [
  { input: 'a', expected: 'A' },
  { input: 'Hello', expected: 'HeLlO' },
  { input: 'HELLO', expected: 'HeLlO' },
  { input: 'cheese', expected: 'ChEeSe' },
  { input: 'good bye', expected: 'GoOd ByE' },
  { input: ' row a boat ', expected: ' RoW a BoAt ' },
  { input: '12 Good Byes!', expected: '12 GoOd ByEs!' },
  { input: 'h1! Hoe gaat het?', expected: 'H1! hOe GaAt HeT?' },
  { input: '0 . x . 0', expected: '0 . X . 0' },
];

for (const testCase of testCases) {
  const { input, expected } = testCase;
  const result = bouncifyText(input);

  console.log(`Input: ${input}`);
  console.log(`Expected: ${expected}`);
  console.log(`Result: ${result}`);
  console.log('---');
}
