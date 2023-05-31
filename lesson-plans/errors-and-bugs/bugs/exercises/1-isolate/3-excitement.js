'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line: 25
    why: the test case is not working
    trying: to excited add excited + character + !
*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {

  excited += character + '!';

}

alert(excited);
