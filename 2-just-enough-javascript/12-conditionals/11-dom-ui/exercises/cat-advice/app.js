import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  // The code should retrieve the values of the checkboxes in the form and store them in variables.

  // --- generate good advice ---

  // Based on the user's input, advice can be generated. This can involve conditional statements or logic to determine what advice to provide.

  // --- display advice for the user ---

  // The generated advice should be displayed to the user. The code can use the displayString function (imported from the dom-io library) to update the content of the custom-advice pre element with the generated advice.
});
