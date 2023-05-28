

'use strict';

console.log('--- in execution phase ---');


/*
  environment:

  name:
  message:

  location: line 27

  life cycle: This section describes the life cycle of the error, which typically refers to the stages of detection, debugging, and resolution.

  the mistake: else

  the fix(es): else if
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if(userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


