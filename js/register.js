// This file contains the code for the register module.
console.log("Register script loaded");
// Import the Firebase services

import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase.js";
import { serverTimestamp } from "firebase/firestore"; // Import serverTimestamp for Firestore

document.addEventListener("DOMContentLoaded", function () {
  let isSubmitting = false; // Initialize a flag to prevent multiple submissions
  const registerForm = document.getElementById("register-form");
  const errorEl = document.getElementById("password-error");
  const passEl = document.getElementById("reg-password");
  const confirmEl = document.getElementById("confirm-password");
  const regSubmitEl = document.getElementById("regSubmit");

  function validatePasswordMatch() {
    if (confirmEl.value !== passEl.value) {
      confirmEl.setCustomValidity("Passwords do not match.");
      errorEl.style.display = "inline";
    } else {
      confirmEl.setCustomValidity("");
      errorEl.style.display = "none";
    }
  }

  registerForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions
    isSubmitting = true; // Set the flag to true to prevent further submissions
    regSubmitEl.disabled = true; // Disable the submit button to prevent multiple submissions
    regSubmitEl.textContent = "Registering..."; // Change button text to indicate registration in progress

    //must re-run in case user never typed into confirm field
    validatePasswordMatch();
    if (!registerForm.checkValidity()) return; //if the form is invalid, do not submit

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = passEl.value.trim();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created: ", user);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: name,
        email: email,
        isAdmin: false,
        createdAt: serverTimestamp(), // Use serverTimestamp for accurate timestamp
      });
      console.log("User document created in Firestore: ", user.uid);
      alert("Registration successful! You can now log in.");
      window.location.href = "index.html";
    } catch (error) {
      console.error("Registration error object: ", error);
      alert("Registration error: " + error.message);

      isSubmitting = false; // Reset the flag to allow future submissions
      regSubmitEl.disabled = false; // Re-enable the submit button
      regSubmitEl.textContent = "Register"; // Reset button text.
    }
  });
});
