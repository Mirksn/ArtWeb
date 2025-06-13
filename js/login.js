console.log("Login script loaded");
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm?.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("log-email").value;
      const password = document.getElementById("log-password").value;

      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        const snap = await getDoc(doc(db, "users", cred.user.uid));
        if (snap.exists()) {
          const data = snap.data();
          if (data.isAdmin) {
            alert("Welcome Admin!");
            window.location.href = "/admin.html";
          } else {
            alert("Login successful!");
            window.location.href = "/";
          }
        } else {
          alert("User not found. Please register.");
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("Login failed: " + err.message);
      }
    });
  }
});
