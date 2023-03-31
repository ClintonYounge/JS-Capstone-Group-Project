import mealCounter from '../__Mocks__/mockMealsAPI.js';

describe('mealCounter', () => {
  test('should return the number of meals starting with g', async () => {
    const result = await mealCounter();
    expect(result).toBe(6);
  });
});
