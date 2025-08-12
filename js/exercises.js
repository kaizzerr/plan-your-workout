const apiHost = "exercisedb.p.rapidapi.com";
const apiKey = "805677916cmshc9def07ba7328a5p13402ajsn58d0d2c047b7";

async function getStatus() {
  const res = await fetch(`https://${apiHost}/status`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": apiHost,
      "x-rapidapi-key": apiKey
    }
  });
  return res.json();
}

async function getName() {
  const res = await fetch(`https://${apiHost}/name/%7Bname%7D`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": apiHost,
      "x-rapidapi-key": apiKey
    }
  });
  return res.json();
}

document.addEventListener("DOMContentLoaded", () => {

//Target Form: Displays possible exercises for targetted muscles
  document.getElementById("targetForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const target = document.getElementById("target").value;
    const targetExercisesDiv = document.getElementById("targetExercises");

    if (!target) {
      targetExercisesDiv.innerHTML = "<p>Please select a target muscle</p>";
      return;
    }

    try {
      const response = await fetch(`https://${apiHost}/exercises/target/${encodeURIComponent(target)}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": apiHost,
          "x-rapidapi-key": apiKey
        }
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const targetExercises = await response.json();

      if (targetExercises.length === 0) {
        targetExercisesDiv.innerHTML = `<p>No exercises found for "${target}"</p>`;
        return;
      }

      const ul = document.createElement("ul");
      targetExercises.forEach(exercise => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${exercise.name}</strong>: ${exercise.description || 'No description available'}`;
        ul.appendChild(li);
      });

      targetExercisesDiv.innerHTML = "";
      targetExercisesDiv.appendChild(ul);

    } catch (error) {
      targetExercisesDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });


//Equipment Form: Displays possible exercises for preferred work-out equipment
  document.getElementById("equipmentForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const equipment = document.getElementById("equipment").value;
    const equipmentExercisesDiv = document.getElementById("equipmentExercises");

    if (!equipment) {
      equipmentExercisesDiv.innerHTML = "<p>Please select equipment</p>";
      return;
    }

    try {
      const response = await fetch(`https://${apiHost}/exercises/equipment/${encodeURIComponent(equipment)}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": apiHost,
          "x-rapidapi-key": apiKey
        }
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const exercises = await response.json();

      if (exercises.length === 0) {
        equipmentExercisesDiv.innerHTML = `<p>No exercises found for "${equipment}".</p>`;
        return;
      }

    equipmentExercisesDiv.innerHTML = "";

    const ul = document.createElement("ul");

    exercises.forEach(exercise => {
      const li = document.createElement("li");
      li.classList.add("exercise");
    
      li.innerHTML = `
        <h3>${exercise.name}</h3>
        <p><strong>Target:</strong> ${exercise.target}</p>
        <p><strong>Description:</strong> ${exercise.description || "No description available"}</p>
        <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
        <hr/>
      `;
    
      ul.appendChild(li);
    });
    
    equipmentExercisesDiv.appendChild(ul);

    } catch (error) {
      equipmentExercisesDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });


//Body Part Form: Displays possible exercises for targetted body parts
    document.getElementById("bodyPartForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const bodyPart = document.getElementById("bodyPart").value;
    const bodyPartExercisesDiv = document.getElementById("bodyPartExercises");

    if (!bodyPart) {
      bodyPartExercisesDiv.innerHTML = "<p>Please select a body part</p>";
      return;
    }

    bodyPartExercisesDiv.innerHTML = "";

    try {
      const response = await fetch(`https://${apiHost}/exercises/bodyPart/${encodeURIComponent(bodyPart)}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": apiHost,
          "x-rapidapi-key": apiKey,
        },
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const exercises = await response.json();

      if (exercises.length === 0) {
        bodyPartExercisesDiv.innerHTML = `<p>No exercises found for "${bodyPart}"</p>`;
        return;
      }

      let html = "<ul>";
      exercises.forEach(exercise => {
        html += `
          <li>
            <h3>${exercise.name}</h3>
            <p><strong>Target Muscle:</strong> ${exercise.target}</p>
            <p><strong>Equipment:</strong> ${exercise.equipment}</p>
            <p><strong>Description:</strong> ${exercise.description || "No description available."}</p>
            <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
          </li>
        `;
      });
      html += "</ul>";

      bodyPartExercisesDiv.innerHTML = html;

    } catch (error) {
      bodyPartExercisesDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});