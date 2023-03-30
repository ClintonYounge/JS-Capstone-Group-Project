const saveLocalStorage = (array, key) => {
  localStorage.setItem(`${key}`, JSON.stringify(array));
};

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(`${key}`));

export { saveLocalStorage, getLocalStorage };