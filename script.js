// Global state object to store application state
const appState = {
    isLoggedIn: false,
    username: "Guest",
  }
  
  // Get references to DOM elements
  const loginForm = document.getElementById("loginForm")
  const welcomeMessage = document.getElementById("welcomeMessage")
  const usernameInput = document.getElementById("usernameInput")
  const loginBtn = document.getElementById("loginBtn")
  const logoutBtn = document.getElementById("logoutBtn")
  const headerGreeting = document.getElementById("headerGreeting")
  const headerUsername = document.getElementById("headerUsername")
  const profileSection = document.getElementById("profileSection")
  const profileUsername = document.getElementById("profileUsername")
  
  // Function to update all UI elements based on the global state
  function updateUI() {
    // Update header greeting
    headerUsername.textContent = appState.username
    headerGreeting.classList.toggle("hidden", !appState.isLoggedIn)
  
    // Update profile section
    profileUsername.textContent = appState.username
    profileSection.classList.toggle("hidden", !appState.isLoggedIn)
  
    // Update main content area
    loginForm.classList.toggle("hidden", appState.isLoggedIn)
    welcomeMessage.classList.toggle("hidden", !appState.isLoggedIn)
  }
  
  // Event listener for login button
  loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim()
  
    if (username) {
      // Update the global state
      appState.isLoggedIn = true
      appState.username = username
  
      // Update the UI based on the new state
      updateUI()
  
      // Clear the input field
      usernameInput.value = ""
    } else {
      alert("Please enter a username")
    }
  })
  
  // Event listener for logout button
  logoutBtn.addEventListener("click", () => {
    // Update the global state
    appState.isLoggedIn = false
    appState.username = "Guest"
  
    // Update the UI based on the new state
    updateUI()
  })
  
  // Initialize the UI based on the initial state
  updateUI()  