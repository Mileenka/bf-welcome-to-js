'use strict';

let letters = 'a b c d ';

let index = 0;
while (index < letters.length) {
  if (letters[index] !== ' ') {
    console.log(letters[index]);
  }
  index++;
}
