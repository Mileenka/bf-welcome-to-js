import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  // The code should retrieve the values of the checkboxes in the form and store them in variables.

  let likesCats = readBoolean('likes-cats');

  let isAllergic = readBoolean('is-allergic');

  let ownsOne = readBoolean('owns-one');

  // --- generate good advice ---

  // Based on the user's input, advice can be generated. This can involve conditional statements or logic to determine what advice to provide.

  let advice = '';

  if (likesCats) {
    advice = 'get a cat';
  }
  if (isAllergic) {
    advice = 'you are doing great';
  }
  if (ownsOne) {
    advice = 'you could be doing worse';
  }
  if (isAllergic && ownsOne) {
    advice = 'rethink your life choices';
  }
  if (likesCats && isAllergic) {
    advice = 'make a friend who has a cat';
  }
  if (likesCats && ownsOne) {
    advice = 'you are doing great';
  }
  if (likesCats && isAllergic && ownsOne) {
    advice = 'replace your cat with a stuffed animal';
  }
  // --- display advice for the user ---

  // The generated advice should be displayed to the user. The code can use the displayString function (imported from the dom-io library) to update the content of the custom-advice pre element with the generated advice.

  displayString('custom-advice', advice);
});
