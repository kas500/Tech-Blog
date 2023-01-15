    const newPostButton = document.querySelector("#newPost");
    newPostButton.addEventListener('click', async function (e) {
      const postSubject = document.querySelector("#postSubject").value.trim();
      const postArticle = document.querySelector("#postArticle").value.trim();
      const user_id = document.querySelector("#postArticle").getAttribute("userId");
      if (postSubject && postArticle) {
        const response = await fetch('/api/dashboard', {
          method: 'POST',
          body: JSON.stringify({postSubject, postArticle, user_id}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          alert(response.statusText)
          document.location.replace('/');
        } else {
          alert(response.url);
          alert("Cannot create post");
        }
      }
      else{
        alert("Please fill out all fields");
      }
    });