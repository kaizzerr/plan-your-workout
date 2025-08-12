const apiHost = "fitness-info-api.p.rapidapi.com";
const apiKey = "805677916cmshc9def07ba7328a5p13402ajsn58d0d2c047b7";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bmiForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const height = parseFloat(document.getElementById("bmiHeight").value);
    const weight = parseFloat(document.getElementById("bmiWeight").value);

    const res = await fetch(`https://${apiHost}/api/bmi`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey
      },
      body: JSON.stringify({ height, weight })
    });

    const data = await res.json();
    document.getElementById("bmiResult").innerHTML =
      `<p>Your BMI is ${data.bmi} which is (${data.category})</p>`;
  });

  document.getElementById("intakeForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const height = parseFloat(document.getElementById("intakeHeight").value);
    const weight = parseFloat(document.getElementById("intakeWeight").value);
    const age = parseInt(document.getElementById("intakeAge").value);
    const sex = document.getElementById("intakeSex").value;
    const goal = document.getElementById("intakeGoal").value;

    const res = await fetch(`https://${apiHost}/api/intake`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey
      },
      body: JSON.stringify({ height, weight, age, sex, goal })
    });
    
    const data = await res.json();
    document.getElementById("intakeResult").innerHTML =
      `<p>Daily Calorie Intake: ${data.dailyCalories} kcal</p>
      <p>Protein: ${data.protein} g</p>
      <p>Carbs: ${data.carbs} g</p>
      <p>Fat: ${data.fat} g</p>`;
  });

  document.getElementById("recommendForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const bmi = parseFloat(document.getElementById("recommendBmi").value);

    const res = await fetch(`https://${apiHost}/api/recom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey
      },
      body: JSON.stringify({ bmi })
    });

    const data = await res.json();
    document.getElementById("recommendResult").innerHTML =
      `<p>Recommendation for you: ${data.recommendation}</p>`;
  });
});