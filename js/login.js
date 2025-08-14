document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const enteredUsername = document.getElementById("loginUsername").value.trim();
        const enteredPassword = document.getElementById("loginPassword").value.trim();

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            loginMessage.textContent = `Welcome back, ${storedUsername}`;

            localStorage.setItem("loggedIn", "true");

            setTimeout(() => {
                window.location.href = "account.html";
            }, 1000);

        } else {
            loginMessage.textContent = "Invalid username or password";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const burger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
  });
});