const commentPopupDom = document.querySelector('.comment-popup');
const invApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gq2xGcbQlIOM2p1edhF0/comments';

const closeCommentPopuup = () => {
  const commentPopupDomChildren = commentPopupDom.children;
  for (let i = 0; i < commentPopupDomChildren.length; i += 1) {
    commentPopupDomChildren[i].style.display = 'none';
    document.body.style.overflow = 'scroll';
  }
};

const fetchCommentContent = (commentData) => {
  const invApiCommentId = `${invApiComment}?item_id=${commentData.idMeal}`;

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

  const showComments = document.createElement('div');
  showComments.classList.add('show-comments');
  commentPopupContainer.append(showComments);

  const commentHead = document.createElement('h3');
  commentHead.classList.add('comment-head');
  const countComments = async (invApi) => {
    const response = await fetch(invApi);
    const data = await response.json();
    commentHead.innerHTML = `Comments (${data.length})`;
  };
  countComments(invApiCommentId);
  commentPopupContainer.append(commentHead);

  const allCommentsContainer = document.createElement('div');
  allCommentsContainer.classList.add('all-comments-container');
  const displayAllComments = async (invApi) => {
    const response = await fetch(invApi);
    const data = await response.json();
    data.forEach((element) => {
      const userComments = document.createElement('div');
      userComments.classList.add('user-comments');
      userComments.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
      allCommentsContainer.append(userComments);
    });
  };
  displayAllComments(invApiCommentId);
  commentPopupContainer.append(allCommentsContainer);

  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');
  commentForm.setAttribute('onsubmit', 'return false');
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

  const postCommentsToInvApi = async () => {
    const userNameValue = nameInputComment.value;
    const userInsightValue = insightInputComment.value;
    await fetch(invApiComment, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: commentData.idMeal,
        username: userNameValue,
        comment: userInsightValue,
      }),
    });
    nameInputComment.value = '';
    insightInputComment.value = '';
    window.location.reload();
  };
  submitComment.addEventListener('click', postCommentsToInvApi);
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