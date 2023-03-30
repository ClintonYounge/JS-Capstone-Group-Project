import {createObject,postToApi,getApi} from "./reservation-api.js";

const SubmitEvent = () => {
    const subimtBtn = document.querySelector('#subimtBtn');
    subimtBtn.onclick = (e)=> {
        e.preventDefault();
        //POST API
        postToApi(createObject());
        //Update ReservationList
        getApi().then(data => {
            console.log(data);
        })
    }
}

const listReservation = () => {
    const container = document.querySelector('.reservation-details');
    container.innerHTML = '';
    let output = '';
    output = 
    `<ul class = "reservationList">
        <li>item1 by Ahmad</li>
    </ul>`
    container.innerHTML = output;
    console.log(container);
    reservationForm(container);
}

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
    `
    container.appendChild(form);
    SubmitEvent();
}


export {listReservation};