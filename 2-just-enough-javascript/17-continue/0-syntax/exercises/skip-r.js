'use strict';

// prettier-ignore
{ // so prettier does not remove the extra spacing

// ::::: don't forget to trace the program! :::::

let animal = 'horse';

for (let char of animal) {


    if (char === 'r') {

        continue; // <-- a keyword

    }

    console.log(char);
}
}
