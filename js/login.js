import {
  auth,
  signInWithEmailAndPassword,
  db,
  doc,
  getDoc,
} from "./firebase.js";
// Import the Firebase services you need

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("log-email").value;
    const password = document.getElementById("log-password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      //Fetch the user's Firestore profile
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        if (userData.admin === true) {
          // Redirect to admin page
          alert("Welcome Admin!");
          window.location.href = "admin.html";
        } else {
          // Normal User
          alert("Login successful!");
          window.location.href = "index.html";
        }
      } else {
        // User not found
        alert("User not found. Please register.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  });
}
