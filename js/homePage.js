document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const burger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username && email && password) {
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            signupMessage.textContent = "Sign-up successful!";

            signupForm.reset();
        } else {
            signupMessage.textContent = "Please fill in all fields.";
        }
    });
});