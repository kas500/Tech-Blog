//post comments handler
const postButtons = document.querySelectorAll('#postComment');
  for (let i = 0; i < postButtons.length; i++) {
    postButtons[i].addEventListener('click', async function (e) {
      const commentText = e.target.parentNode.parentNode.querySelector("#commentText").value.trim();
      const userId = e.target.parentNode.parentNode.querySelector("#commentText").getAttribute("userId");
      const postId = e.target.parentNode.parentNode.querySelector("#commentText").getAttribute("postId");
      
      if (commentText) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({commentText, userId, postId}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
        
          alert("Cannot post a comment");
        }
      }
      else{
        alert("Comment cannot be empty");
      }
    });
  }