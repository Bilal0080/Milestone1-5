// Toggle between Login and Signup Forms
document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('signupBox').style.display = 'block';
    document.querySelector('.auth-box').style.display = 'none';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('signupBox').style.display = 'none';
    document.querySelector('.auth-box').style.display = 'block';
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from refreshing on form submit

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page or load user dashboard
    } else {
        document.getElementById('loginError').innerText = "Invalid email or password.";
    }
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from refreshing on form submit

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        alert("Sign up successful!");
        // Redirect to login page or authenticate the user
    } else {
        document.getElementById('signupError').innerText = "All fields are required.";
    }
});
