import reservationPage from './reservation.js';
import { displayLikes } from './likedMeals.js';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=g';

const mealData = document.querySelector('.meal-cards');

const displayMeal = async (data) => {
  const meal = document.createElement('div');
  meal.classList.add('card');
  meal.innerHTML = `
    <div class="card-image">
      <img src="${data.strMealThumb}" />
    </div>
    <div class="card-content">
      <div class="first-part">
        <h2>${data.strMeal}</h2>
        <div class='like-part likes-${data.idMeal}'>
          <i class="fa-solid fa-heart like-icon" id='${data.idMeal}'></i> 
          <span class='like-count ${data.idMeal}'></span>
        </div>
      </div>
      <div class="second-part">
        <button class="comment-btn">Comment</button>
        <button class="reservation-btn">Reservation</button>
      </div>
    </div>
  `;
  mealData.appendChild(meal);

  // Fetch likes for the meal and update like count element
  const response = await fetch(`${URL}?item_id=${data.idMeal}`);
  const likes = await response.json();
  const likeCount = meal.querySelector(`.likes-${data.idMeal} .like-count`);
  likeCount.textContent = `${likes[0]?.likes ?? 0} likes`;
};

const display = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  data.meals.forEach((food) => {
    displayMeal(food);
  });
  displayLikes();
  reservationPage(data.meals);
};

export default display;