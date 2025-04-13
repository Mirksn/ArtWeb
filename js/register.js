// This file contains the code for the register module.
// Import the Firebase services
import {
  auth,
  db,
  setDoc,
  doc,
  createUserWithEmailAndPassword,
  getDoc,
} from "./firebase.js";

// Register functionality
const registerForm = document.getElementById("register-form");
if (registerForm) {
  //async means this is a asynchronous func-inside it we can use await to pause the code untill 'promises' finish
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    //I used preventDefaut multiple times-it stops the defaut actions
    //It stops the form from reloading the page or sending a regular HTTP request

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const name = document.getElementById("reg-name").value;

    //Password Match Check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (auth.currentUser) {
      alert("You are already logged in. Please log out first.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //we get the UID of the user from the userCredential object
      //userCredential is an object that contains information about the newly created user
      const uid = userCredential.user.uid;
      alert("Registration successful!");
      window.location.href = "login.html";

      // Store user data in Firestore
      await setDoc(doc(db, "users", uid), {
        uid: uid,
        name: name,
        email: email,
        admin: false, // Set admin to false by default
        createdAt: new Date(), // Store the creation date
      });
    } catch (error) {
      alert("Registration error: " + error.message);

      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use. Please use a different email.");
      }
    }
  });
}
