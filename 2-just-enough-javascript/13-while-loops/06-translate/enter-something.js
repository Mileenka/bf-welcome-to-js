'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message (string)

  Test Cases: 

*/

let input = null;

while (input === null) {
  input = prompt('enter something');
}

let output = '';

if (input === '') {
  output = 'you entered nothing :(';
} else {
  output = 'thank you for something!';
}

alert(output);
