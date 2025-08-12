document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
        return;
    }

    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    const userInfoDiv = document.getElementById("userInfo");
    const goalsSection = document.getElementById("goalsSection");
    const goalsList = document.getElementById("goalsList");

    userInfoDiv.innerHTML = `
        <h2>Welcome, ${username}</h2>
        <p>Email: ${email}</p>
    `;

    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    goalsList.innerHTML = "";

    if (goals.length > 0) {
        goals.forEach(goal => {
            const li = document.createElement("li");
            li.textContent = goal;
            goalsList.appendChild(li);
        });
    } else {
        goalsList.innerHTML = `<li>You haven't set any goals yet.</li>`;
    }

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("goals");
        window.location.href = "login.html";
    });
});