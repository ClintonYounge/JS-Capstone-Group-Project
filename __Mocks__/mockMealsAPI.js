const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=g';

const mealCounter = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const mealCount = data.meals.length;
  return mealCount;
};

export default mealCounter;