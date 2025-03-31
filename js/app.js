console.log("app.js loaded at", new Date().toISOString());
console.log("Page URL:", window.location.href);

//Login Functionality
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginModal = document.getElementById("login-modal");

if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "block";
  });
}

const registerModal = document.getElementById("register-modal");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authContainer = document.getElementById("auth-container");
const closeBtns = document.querySelectorAll(".close");

if (registerBtn) {
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    registerModal.style.display = "block";
  });
}

//closeBtns must be quertSelectorAll
closeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  });
});
