/* @jest-environment jsdom */

import mockLocalStorage from '../__Mocks__/localStorageMock';
import counterMock from '../__Mocks__/counterMock.js';

describe('validation for counter',() => {
    //Arrange Environment
    const newObject = {
            item_id: 2311,
            username: 'Ali',
            date_start: '2022-2-1',
            date_end: '2022-2-3',
    }

    mockLocalStorage.saveMockLocal(JSON.stringify(newObject));

    test('it should be equal-1',()=>{
        expect(counterMock(newObject.item_id)).toMatch(/1/);
    })
})
