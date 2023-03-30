const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=g';
const mealCountContainer = document.querySelector('.meal-counter');

const mealCounter = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const meal = data.meals;
  const mealCount = meal.length;
  mealCountContainer.innerHTML = (mealCount);
};

export default mealCounter;
