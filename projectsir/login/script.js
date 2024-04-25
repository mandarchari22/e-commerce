document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Check if username and password match
      if (username === 'username' && password === 'password') {
        // Store user information in localStorage
        localStorage.setItem('username', username);
        alert('Login successful!');
        // Redirect or do something else after successful login
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });
  