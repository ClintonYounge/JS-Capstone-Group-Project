/* @jest-environment jsdom */

import countComments from '../__Mocks__/commentsCounter.js';

describe('validation for comment counter', () => {
  document.body.innerHTML = '<h3 class="comment-head"></h3>';

  test('Lets test', () => {
    expect(countComments()).toMatch(/1/);
  });
});