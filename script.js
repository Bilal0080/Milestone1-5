// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing on form submit
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Message Sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // You can add AJAX or API call to send this data to a server
    } else {
        alert("Please fill in all fields.");
    }

    // Clear the form
    document.getElementById('contactForm').reset();
});
