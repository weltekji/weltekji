document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                responseMessage.textContent = data.message;
                responseMessage.style.color = 'green';
            } else {
                responseMessage.textContent = data.message;
                responseMessage.style.color = 'red';
            }
        })
        .catch(error => {
            responseMessage.textContent = 'An error occurred. Please try again later.';
            responseMessage.style.color = 'red';
        });
    });
});
