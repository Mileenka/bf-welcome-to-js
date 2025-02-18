'use strict';

// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

// --- read user input ---

whenFormDataChanges('nums', () => {
  const numberLeft = readNumber('left-num');
  const numberRight = readNumber('right-num');

  // --- create a message

  let message = `${numberLeft} > ${numberRight} ----> ${
    numberLeft > numberRight
  }\n`;
  message += `${numberLeft} >= ${numberRight} ---> ${
    numberLeft >= numberRight
  }\n`;
  message += `${numberLeft} === ${numberRight} --> ${
    numberLeft === numberRight
  }\n`;
  message += `${numberLeft} <= ${numberRight} ---> ${
    numberLeft <= numberRight
  }\n`;
  message += `${numberLeft} < ${numberRight} ----> ${numberLeft < numberRight}`;

  displayString('compared', message);
});
