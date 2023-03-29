const commentPopupDom = document.querySelector('.comment-popup');

const closeCommentPopuup = () => {
  const commentPopupDomChildren = commentPopupDom.children;
  for (let i = 0; i < commentPopupDomChildren.length; i += 1) {
    commentPopupDomChildren[i].style.display = 'none';
    document.body.style.overflow = 'scroll';
  }
};

const fetchCommentContent = (commentData) => {
  const commentPopupContainer = document.createElement('div');
  commentPopupContainer.classList.add('comment-popup-container');
  commentPopupContainer.style.display = 'none';
  commentPopupContainer.setAttribute('id', commentData.idMeal);
  commentPopupDom.append(commentPopupContainer);

  const thumbnailComment = document.createElement('img');
  thumbnailComment.classList.add('comment-popup-thumbnail');
  thumbnailComment.src = commentData.strMealThumb;
  commentPopupContainer.append(thumbnailComment);

  const closeBtnComment = document.createElement('button');
  closeBtnComment.classList.add('close-button-comment');
  closeBtnComment.onclick = () => closeCommentPopuup();
  closeBtnComment.innerHTML = 'X';
  commentPopupContainer.append(closeBtnComment);

  const commentItemHeading = document.createElement('h3');
  commentItemHeading.classList.add('comment-item-heading');
  commentItemHeading.innerHTML = commentData.strMeal;
  commentPopupContainer.append(commentItemHeading);

  const commentItemDetails = document.createElement('div');
  commentItemDetails.classList.add('comment-item-details');
  commentPopupContainer.append(commentItemDetails);

  const cuisine = document.createElement('div');
  cuisine.classList.add('cuisine');
  cuisine.innerHTML = `Area/Cuisine: ${commentData.strArea}`;
  commentItemDetails.append(cuisine);

  const youtubeVideo = document.createElement('a');
  youtubeVideo.classList.add('youtube-video');
  youtubeVideo.href = commentData.strYoutube;
  youtubeVideo.innerHTML = 'Youtube Video';
  commentItemDetails.append(youtubeVideo);

  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');
  commentPopupContainer.append(commentForm);

  const nameInputComment = document.createElement('input');
  nameInputComment.setAttribute('type', 'text');
  nameInputComment.classList.add('comment-name-input');
  nameInputComment.setAttribute('placeholder', 'Your Name');
  nameInputComment.setAttribute('required', true);
  commentForm.append(nameInputComment);

  const insightInputComment = document.createElement('textarea');
  insightInputComment.classList.add('comment-insight-input');
  insightInputComment.setAttribute('placeholder', 'Your Insight');
  insightInputComment.setAttribute('required', true);
  commentForm.append(insightInputComment);

  const submitComment = document.createElement('button');
  submitComment.classList.add('submit-comment');
  submitComment.innerHTML = 'Comment';
  commentForm.append(submitComment);
};

window.displayOnClick = (menuIdClicked) => {
  const commentPopupDomChildren = commentPopupDom.children;
  for (let i = 0; i < commentPopupDomChildren.length; i += 1) {
    const menuIdChild = parseInt(commentPopupDomChildren[i].getAttribute('id'), 10);
    if (menuIdChild === menuIdClicked) {
      commentPopupDomChildren[i].style.display = 'flex';
      document.body.style.overflow = 'hidden';
    } else {
      commentPopupDomChildren[i].style.display = 'none';
    }
  }
};

export default fetchCommentContent;