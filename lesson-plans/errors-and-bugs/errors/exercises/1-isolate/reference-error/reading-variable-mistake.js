'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name: ReferenceError
  message: tomatoes is not defined
  location: Line 20
  life cycle: Creation phase -> Execution phase
  the mistake: Using tomatoes before it is declared
  the fix(es): Declare the tomatoes variable before using it in the console.log statement
*/

let tomatoes = 'fresh';

console.log(tomatoes); // ReferenceError: tomatoes is not defined

