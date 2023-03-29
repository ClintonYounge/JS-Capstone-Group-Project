const createPop = (array, i) => {
  const popupPage = document.querySelector('.popup');
  popupPage.innerHTML = '';
  let output = '';
  output += `
            <div class="description">
                    <button class="closeBtn">X</button>
                    <img src=${array[i].strMealThumb} 
                    alt=${array[i].strMeal}>
                    <h2 class="reservationTitle">
                    ${array[i].strMeal}
                    </h2>
                    <h3>Instructions: </h3>
                    <p class="reservationP" >
                    ${array[i].strInstructions}
                    </p>
            </div>
            <div class="reservation-details"></div>`;
  popupPage.innerHTML = output;
};

const removeContent = () => {
  const popupPage = document.querySelector('.popup');
  const mainContent = document.querySelector('#meals');
  const closeBtn = document.querySelector('.closeBtn');
  mainContent.classList.add('displayNone');
  popupPage.classList.remove('displayNone');
  closeBtn.onclick = () => {
    mainContent.classList.remove('displayNone');
    popupPage.classList.add('displayNone');
  };
};

const reservationPage = (array) => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  reserveBtn.forEach((btn, i) => {
    btn.onclick = () => {
      createPop(array, i);
      removeContent();
    };
  });
};

export default reservationPage;