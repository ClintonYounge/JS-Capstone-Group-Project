const URL_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NSQ2jUNcTp3W8mj5Cd8P/likes';
const mealContainer = document.querySelector('.meal-cards');

const fetchLikes = async (item) => {
  const response = await fetch(URL_API);
  const data = await response.json();
  const likeCount = document.querySelector(`.likes-${item}`);
  likeCount.querySelector('span').textContent = `${data.filter((items) => items.item_id === item)[0].likes} likes`;
};

const likes = () => {
  mealContainer.addEventListener('click', async (e) => {
    const clicked = e.target.closest('.like-icon');
    if (!clicked) return;
    const item = clicked.getAttribute('id');
    await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
      }),
    });
    await fetchLikes(item);
  });
};

const displayLikes = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  data.forEach((item) => {
    const likeCount = document.querySelector(`.likes-${item.item_id}`);
    if (likeCount) {
      const likes = item.likes ? item.likes : 0;
      likeCount.querySelector('span').textContent = `${likes} likes`;
    }
  });
};

export { likes, displayLikes };
