import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";

documentl.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const userGreeting = document.getElementById("user-greeting");

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data();
          if (loginBtn) loginBtn.style.display = "none"; // Hide login button
          if (registerBtn) registerBtn.style.display = "none"; // Hide register button

          if (userGreeting) {
            userGreeting.textContent = `Welcome, ${data.username}!`; // Display user's name or email
            userGreeting.style.display = "inline"; // Show greeting
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    } else {
      if (loginBtn) loginBtn.style.display = "inline"; // Show login button
      if (registerBtn) registerBtn.style.display = "inline"; // Show register button
      if (userGreeting) userGreeting.style.display = "none"; // Hide greeting
    }
  });
});
