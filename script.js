document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData);
  
    fetch("https://script.google.com/macros/s/AKfycbwNwRLQ12KFUvVgzj2wUP1nbGCoBJnUrUQ6WVBjADidRIuzrvSeKuJ3FCyoamh4HIwPDQ/exec", {
      method: "POST",
      body: params,
    })
      .then(response => response.json())
      .then(data => alert(data.status === "success" ? data.message : `Error: ${data.message}`))
      .catch(error => {
        alert("Error submitting the form. Please try again.");
        console.error(error);
      });
  });
  