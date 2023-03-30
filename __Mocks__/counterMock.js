import mockLocalStorage from './localStorageMock.js';

const reservationCounter = (key) => {
  const counterSpan = document.querySelector('.counter');
  const number = mockLocalStorage.getMockLocal(key);
  counterSpan.innText = number;
  return counterSpan.innText;
};

export default reservationCounter;