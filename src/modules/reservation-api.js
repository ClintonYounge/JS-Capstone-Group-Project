const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NSQ2jUNcTp3W8mj5Cd8P/reservations/';

const createObject = (id) => {
  const name = document.querySelector('#nameInput');
  const startDate = document.querySelector('#startDate');
  const endDate = document.querySelector('#endDate');
  const newObject = {
    item_id: `${id}`,
    username: name.value,
    date_start: startDate.value,
    date_end: endDate.value,
  };
  name.value = '';
  startDate.value = '';
  endDate.value = '';
  return newObject;
};

const postToApi = (object) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  });
};

const getApi = async (id) => {
  const response = await fetch(`${URL}?item_id=${id}`);
  const data = response.json();
  return data;
};

export { createObject, postToApi, getApi };