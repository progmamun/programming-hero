/*
<textarea name="" id="new-comment" cols="60" rows="4"></textarea>
<br>
<button id="submit-comment">Post</button>
*/
// 1. Set button
document
  .getElementById('submit-comment')
  .addEventListener('click', function () {
    // 2. get user comment
    const commentBox = document.getElementById('new-comment');

    // 3. create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    // 4. append the comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    // 5. clean the comment box
    commentBox.value = '';
  });
