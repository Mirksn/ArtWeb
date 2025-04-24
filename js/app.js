//initializes the UI components and handles the login and registration modals
console.log("app.js loaded at", new Date().toISOString());
console.log("Page URL:", window.location.href);

//Login Modal "pop-up" functionality
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "block";
  });
}
//Register Modal "pop-up" functionality
if (registerBtn) {
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    registerModal.style.display = "block";
  });
}

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authContainer = document.getElementById("auth-container");
const closeSpans = document.querySelectorAll(".close");

//closeSpans must be quertSelectorAll
// This code handles the closing of login and registration modals in the UI
closeSpans.forEach((span) => {
  span.addEventListener("click", function () {
    const modal = span.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  });
});

//Close when click != on form
// This code handles the closing of login and registration modals when
// clicked outside the modal
window.addEventListener("click", function (e) {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
  if (e.target === registerModal) {
    registerModal.style.display = "none";
  }
});
