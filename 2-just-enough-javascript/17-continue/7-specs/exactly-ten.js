'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can provide input that is 10 characters long
    - given they cancel, a message is displayed and they are prompted again
    - given the input is too short, they are told how much too short and prompted again
    - given the input is too long, they are told how much too long and prompted again
    - given the input is 10 characters, the loop will exit and the input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input of 10 characters
      'javascript' -> 'javascript'
      '0123456789' -> '0123456789'
      'a b c d e ' -> 'a b c d e '

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output;

/* --- create final output --- */

while (true) {
  let input = prompt('Please enter a 10-character input:');

  if (input === null) {
    alert('You canceled. Please try again.');
    continue; // User canceled, prompt again
  }

  if (input.length < 10) {
    alert(`Input is too short. It should be ${10 - input.length} characters longer.`);
    continue; // Input is too short, prompt again
  }

  if (input.length > 10) {
    alert(`Input is too long. It should be ${input.length - 10} characters shorter.`);
    continue; // Input is too long, prompt again
  }

  output = input;
  break; // Valid input, exit the loop
}

console.log('output:', output);

/* --- alert the result --- */

alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
