'use strict';

/*
  _a:
    declaration:
      init: yes
      types: string
      scopes: global
    reads:
      scopes: none
      checks: none
    assignments:
      types: string
      scopes: none

  _b:
    declaration:
      init: yes
      types: string
      scopes: global
    reads:
      scopes: none
      checks: none
    assignments:
      types: string
      scopes: none

  _c:
    declaration:
      init: yes
      types: string
      scopes: global
    reads:
      scopes: none
      checks: none
    assignments:
      types: string
      scopes: none

  _d:
    declaration:
      init: yes
      types: boolean
      scopes: local
    reads:
      scopes: local
      checks: none
    assignments:
      types: boolean
      scopes: none

  _e:
    declaration:
      init: no
      types: unknown
      scopes: local
    reads:
      scopes: local
      checks: none
    assignments:
      types: unknown
      scopes: none

*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let _a = 'short:';
let _b = 'medium:';
let _c = 'long:';

let _d = true;
while (_d) {
  let _e = prompt('enter something');

  if (_e === null) {
    _d = false;
  } else if (_e.length < 5) {
    _a = _a + '\n- "' + _e + '"';
  } else if (_e.length < 10) {
    _b = _b + '\n- "' + _e + '"';
  } else {
    _c = _c + '\n- "' + _e + '"';
  }
}

alert(_a + '\n\n' + _b + '\n\n' + _c);
