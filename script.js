document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData);
  
    fetch("https://script.google.com/macros/s/AKfycbwJIPm6OJ2Hf3H_fY-VUy3UgoyemtPx6p9VvUIodgdpYDv81D83Qzm9COBptnP7nahRuA/exec", {
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
  
