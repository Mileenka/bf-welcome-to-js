'use strict';
/*
  a user can provide input that contains only uppercase and lowercase letters
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their input is alerted
  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input with only letters:
      ‘abcdABCD’ -> ‘abcdABCD’
      ‘JAVAscript’ -> ‘JAVAscript’
      ‘hi’ -> ‘hi’
*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

while (true) {
  const userInput = prompt('Please enter a string containing only uppercase and lowercase letters:');
  if (userInput === null || userInput === '') {
    continue;
  }
  let isInvalidInput = false;
  for (let i = 0; i < userInput.length; i++) {
    const char = userInput[i];
    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
      isInvalidInput = true;
      break;
    }
  }
  if (isInvalidInput) {
    continue;
  }
  output = userInput;
  break;
}

/* --- alert the result --- */

console.log('output:', output);
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
