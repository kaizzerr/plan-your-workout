document.addEventListener("DOMContentLoaded", () => {
    const goalsForm = document.getElementById("goalsForm");
    const goalsText = document.getElementById("goalsText");
    const goalsList = document.getElementById("goalsList");

    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    renderGoals(savedGoals);

    goalsForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newGoal = goalsText.value.trim();
        if (newGoal) {
            savedGoals.push(newGoal);
            localStorage.setItem("goals", JSON.stringify(savedGoals));
            renderGoals(savedGoals);
            goalsText.value = "";
        }
    });

    function renderGoals(goals) {
        goalsList.innerHTML = "";
        goals.forEach((goal, index) => {
            const li = document.createElement("li");
            li.textContent = goal;
            goalsList.appendChild(li);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const burger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
  });
});