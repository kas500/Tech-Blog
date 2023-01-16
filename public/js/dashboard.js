    //create new post
    const newPostButton = document.querySelector("#newPost");
    newPostButton.addEventListener('click', async function (e) {
      const postSubject = document.querySelector("#postSubject").value.trim();
      const postArticle = document.querySelector("#postArticle").value.trim();
      const user_id = document.querySelector("#postArticle").getAttribute("userId");
      if (postSubject && postArticle) {
        const response = await fetch('/api/dashboard', {
          method: 'POST',
          body: JSON.stringify({
            subject: postSubject, 
            article: postArticle, 
            user_id: user_id}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/dashboard');
          location.reload();
        } else {
          alert("Cannot create post");
        }
      }
      else{
        alert("Please fill out all fields");
      }
    });

     //update post
     const updateButtons = document.querySelectorAll('#updatePost');
     for (let i = 0; i < updateButtons.length; i++) {
      updateButtons[i].addEventListener('click', async function (e) {
      const postId = e.target.parentNode.parentNode.querySelector("#postText").getAttribute("postId");
      const postSubject = e.target.parentNode.parentNode.querySelector("#postSubject").value.trim();
      const postText = e.target.parentNode.parentNode.querySelector("#postText").value.trim();
        const response = await fetch('/api/dashboard/update', {
          method: 'PUT',
          body: JSON.stringify({
            id: postId, 
            subject: postSubject, 
            article: postText,}),
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
          document.location.replace('/dashboard');
          location.reload();
        } else {
          alert("Cannot update post");
        }
    
    });
    }

     //delete post
     const deletePostButton = document.querySelector("#deletePost");
     deletePostButton.addEventListener('click', async function (e) {
       const postId = e.target.parentNode.parentNode.querySelector("#postText").getAttribute("postId");
         const response = await fetch('/api/dashboard/delete', {
           method: 'DELETE',
           body: JSON.stringify({
            id: postId}),
           headers: { 'Content-Type': 'application/json' },
         });
         if (response.ok) {
          document.location.replace('/dashboard');
          location.reload();
         } else {
           alert("Cannot delete post");
         }
     });