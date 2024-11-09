// Contact Form Validation and Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic Validation
    if (name && email && message) {
        document.getElementById('form-response').innerHTML = `<p>Message Sent! <br> Name: ${name} <br> Email: ${email} <br> Message: ${message}</p>`;
        document.getElementById('contactForm').reset(); // Reset form after submission
    } else {
        document.getElementById('form-response').innerHTML = `<p style="color: red;">Please fill in all fields!</p>`;
    }
});

// Fetch Data from an API (Random User Generator API)
document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('apiData').innerHTML = `
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
                <img src="${user.picture.large}" alt="Profile Picture" />
            `;
        })
        .catch(error => {
            document.getElementById('apiData').innerHTML = '<p>Error fetching data.</p>';
        });
});
