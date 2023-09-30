const postFormHandler = async (event) => {
    event.preventDefault();
    console.log("Hello");
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
         document.location.replace('/dashboard');
      } else {
        alert('Failed to make new post');
      }
    }
  };

  document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);