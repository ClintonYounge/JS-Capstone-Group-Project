import { createObject, postToApi, getApi } from './reservation-api.js';

import { saveLocalStorage, getLocalStorage } from './localstorage.js';

import reservationCounter from './reservationCounter.js';

const createReservationItems = (id) => {
  reservationCounter(id);
  const array = getLocalStorage(id);
  const reservationList = document.querySelector('.reservationList');
  let output = '';
  if (!array) {
    output
    += `<li>
       <p>
         Add your Rerservation to see others:
      </p>
    </li>`;
  } else {
    array.forEach((object) => {
      output += `
      <li>
          <p>
              ${object.date_start} - ${object.date_end} by
              ${object.username}
          </p>
      </li>`;
    });
  }
  reservationList.innerHTML = output;
};

const SubmitEvent = () => {
  const subimtBtn = document.querySelector('#subimtBtn');
  subimtBtn.onclick = (e) => {
    e.preventDefault();

    const { id } = e.target.parentElement.parentElement.parentElement;
    // POST API
    postToApi(createObject(id));
    // Update ReservationList by API
    getApi(id).then((array) => {
      // save local
      saveLocalStorage(array, id);
      reservationCounter(id);
      // invoke
      createReservationItems(id);
    });
  };
};

const reservationForm = (container) => {
  const form = document.createElement('form');
  form.className = 'reserveForm';
  form.innerHTML = `
        <h2>Add new reservation</h2>
        <fieldset>
            <input type='text' 
            id='nameInput' placeholder ="Your Name"required>
        </fieldset>  

        <fieldset>
            <label for ="startDate" >Start Date:</label>
            <input type='date' 
            lang="en-CA" id='startDate' required>
        </fieldset> 

        <fieldset>
            <label for ="endDate" >End Date:</label>
            <input type='date' 
            id='endDate' lang="en-CA" required>
        </fieldset>
        
        <fieldset>
            <button id ="subimtBtn" type= "submit" >Reserve</button>
        </fieldset>
    </form>
    `;
  container.appendChild(form);
  SubmitEvent();
};

const listReservation = () => {
  const container = document.querySelector('.reservation-details');
  const ul = document.createElement('ul');
  ul.className = 'reservationList';
  container.append(ul);
  // invoke from localStorage
  createReservationItems(container.id);
  reservationForm(container);
};

export default listReservation;