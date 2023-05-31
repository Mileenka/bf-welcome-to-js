'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome
  
  name: ReferenceError

  message: welf is not defined

  location: Line 21

  life cycle: Execution phase

  the mistake: Trying to assign a value to the variable 'welf' without declaring it.
  
  the fix(es): Declare the 'welf' variable using the 'let' or 'const' keyword before assigning a value to it.
*/

const welf = 'ingrad'; // Declare the variable using the `let` keyword

console.log(welf);