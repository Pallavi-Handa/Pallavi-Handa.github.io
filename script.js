// script.js

// Add event listener to the contact form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Send the form data to the server
    fetch('/contact', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
<script src="script.js"></script>
