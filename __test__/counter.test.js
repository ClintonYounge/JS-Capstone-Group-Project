/* @jest-environment jsdom */

import mockLocalStorage from '../__Mocks__/localStorageMock.js';
import counterMock from '../__Mocks__/counterMock.js';

describe('validation for counter', () => {
  // Arrange Environment
  document.body.innerHTML = '<span class="counter"></span>';
  const newObject = {
    item_id: 2311,
    username: 'Ali',
    date_start: '2022-2-1',
    date_end: '2022-2-3',
  };

  mockLocalStorage.saveMockLocal(
    JSON.stringify(newObject), newObject.item_id,
  );

  test('it should be equal-1', () => {
    expect(counterMock(newObject.item_id)).toMatch(/1/);
  });
});
