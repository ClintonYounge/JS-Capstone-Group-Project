import { getLocalStorage } from './localstorage.js';

const reservationCounter = (key) => {
  const counterSpan = document.querySelector('.counter');
  const number = getLocalStorage(key);
  counterSpan.innerText = `(${number.length})`;
};

export default reservationCounter;