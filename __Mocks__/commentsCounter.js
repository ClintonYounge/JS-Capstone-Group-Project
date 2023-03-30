const countComments = () => {
  const commentHead = document.querySelector('.comment-head');
  const array = [
    {
      comment: 'Delicious',
      creation_date: '2023-03-29',
      username: 'Rashid',
    },
  ];
  commentHead.innerText = `${array.length}`;
  return commentHead.innerText;
};

export default countComments;