// This file contains the code for the register module.

// Import the Firebase services

import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase.js"; // Adjust the import path as necessary

const registerForm = document.getElementById("register-form");
const errorEl = document.getElementById("password-error");
const passEl = document.getElementById("reg-password");
const confirmEl = document.getElementById("confirm-password");

window.validatePasswordMatch = () => {
  if (confirmEl.value !== passEl.value) {
    confirmEl.setCustomValidity("Passwords do not match.");
    errorEl.style.display = "inline";
  } else {
    confirmEl.setCustomValidity("");
    errorEl.style.display = "none";
  }
};

registerForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

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
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: email,
      isAdmin: false,
      createdAt: new Date(),
    });
    alert("Registration successful! You can now log in.");
    window.location.href = "index.html";
  } catch (error) {
    alert("Registration error: " + error.message);
  }
});
