// Get the elements
var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");
var signUpLink = document.getElementById("signUp");
var signInLink = document.getElementById("signIn");
//  Get the input fields
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
// Get the message element
var messageElement = document.getElementById("signupMessage");
var username = document.getElementById("username");

signUpLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.classList.replace("d-block", "d-none");
  signupForm.classList.replace("d-none", "d-block");
});

signInLink.addEventListener("click", function (e) {
  e.preventDefault();
  signupForm.classList.replace("d-block", "d-none");
  loginForm.classList.replace("d-none", "d-block");
});

document
  .querySelector("#signup-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!name || !email || !password) {
      messageElement.innerHTML = "All inputs is required";
        messageElement.style.color = "red";
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      messageElement.innerHTML = "successfully registered";
      messageElement.style.color = "green";

      
    }
  });

document
  .querySelector("#login-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    // Check if any input is empty
    if (email === "" || password === "") {
      errorMsg.textContent = "All inputs are required.";
      errorMsg.style.color = "red";
      return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check for matching user
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // Store the username in localStorage
      localStorage.setItem("name", matchedUser.name);

      // go to the home page
      window.location.href = "home.html";
    } else {
      errorMsg.textContent = "Invalid email or password.";
      errorMsg.style.color = "red";
    }
  });