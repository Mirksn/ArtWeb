// This code initializes the UI components and handles the login and registration modals
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");

  function toggleModal(showModal, hideModal) {
    if (hideModal) hideModal.style.display = "none"; // Close the hideModal if it's open
    if (showModal) showModal.style.display = "block"; // Show the showModal
  }

  // Login Modal "pop-up" functionality
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleModal(loginModal, registerModal); // Close register modal if open
    });
  }
  // Register Modal "pop-up" functionality
  if (registerBtn) {
    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleModal(registerModal, loginModal); // Close login modal if open
    });
  }

  // Close on Escape
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (loginModal.style.display === "block") {
        loginModal.style.display = "none";
      }
      if (registerModal.style.display === "block") {
        registerModal.style.display = "none";
      }
    }
  });

  const closeSpans = document.querySelectorAll(".close"); // Select all close spans
  // Close on span click
  closeSpans.forEach((span) => {
    span.addEventListener("click", function () {
      const modal = span.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Close clicking outside the modal
  window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
    if (e.target === registerModal) {
      registerModal.style.display = "none";
    }
  });
});
