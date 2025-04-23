const handleLogin = async (event) => {
    event.preventDefault();
    
    // Send a request to the backend API to check user credentials
    const response = await fetch('http://localhost:5000/api/users');
    const users = await response.json();
  
    // Example: check if the user exists
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
      alert("Login successful!");
      // Redirect to another page or perform other actions
    } else {
      alert("Invalid credentials");
    }
  };
  