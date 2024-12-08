document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData);
  
    fetch("https://script.google.com/macros/s/AKfycbxNxsUi8U03vYEutad8gINNDvgLTikIVnGgJShIKR-HvlcOB6SAoDlQZVeSfN07Fcje3A/exec", {
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
  
