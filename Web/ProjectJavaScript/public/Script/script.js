// Assuming you have fetched the username from the server response
const loggedInUsername = "exampleUser"; // Replace with the actual username

// Check if the user is logged in
if (loggedInUsername) {
    // Update the navbar to show the logged-in username
    document.getElementById('loggedInUsername').innerText = `Welcome, ${loggedInUsername}`;

    // Hide the login and register buttons
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('registerButton').style.display = 'none';
}