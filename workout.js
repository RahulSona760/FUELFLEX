// ==============Rapid_API=======================>


// const muscleButtons = document.getElementById("muscle-buttons");
// const exerciseList = document.getElementById("exercise-list");

// const headers = {
//   "X-RapidAPI-Key": "89c4e8c212mshdfea8f0e78652cfp1c3520jsn010410bc3483",
//   "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
// };

// async function getBodyParts() {
//   const res = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', { headers });
//   const data = await res.json();
//   data.forEach(part => {
//     const btn = document.createElement('button');
//     btn.textContent = part.toUpperCase();
//     btn.classList.add('muscle-btn');
//     btn.onclick = () => fetchExercises(part);
//     muscleButtons.appendChild(btn);
//   });
// }

// async function fetchExercises(bodyPart) {
//   exerciseList.innerHTML = "Loading...";
//   const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, { headers });
//   const data = await res.json();
//   showExercises(data.slice(0, 12)); // show only 12 for now
// }

// function showExercises(exercises) {
//   exerciseList.innerHTML = "";
//   exercises.forEach(ex => {
//     const card = document.createElement('div');
//     card.classList.add('exercise-card');
//     card.innerHTML = `
//       <img src="${ex.gifUrl}" alt="${ex.name}" />
//       <h4>${ex.name}</h4>
//       <p>Target: ${ex.target}</p>
//       <p>Equipment: ${ex.equipment}</p>
//     `;
//     exerciseList.appendChild(card);
//   });
// }

// getBodyParts();



// ====================API -NINJAS========================>


const apiKey = '1jNFRf6e/cwpfvlHAdmiQw==Jyo4h9Q4hufaRWOT';
const muscleGroups = [
  'biceps', 'triceps', 'chest', 'abs',
  'quads', 'hamstrings', 'calves', 'back', 'shoulders'
];

const muscleButtonsDiv = document.getElementById('muscle-buttons');
const exerciseListDiv = document.getElementById('exercise-list');

// Create buttons for each muscle group
muscleGroups.forEach(muscle => {
  const btn = document.createElement('button');
  btn.textContent = muscle.toUpperCase();
  btn.className = 'muscle-btn';
  btn.onclick = () => fetchExercises(muscle);
  muscleButtonsDiv.appendChild(btn);
});

function fetchExercises(muscle) {
  exerciseListDiv.innerHTML = 'Loading...';

  fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey }
  })
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        exerciseListDiv.innerHTML = 'No exercises found.';
        return;
      }

      exerciseListDiv.innerHTML = ''; // Clear previous
      data.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
          <h3>${ex.name}</h3>
          <p><strong>Type:</strong> ${ex.type}</p>
          <p><strong>Difficulty:</strong> ${ex.difficulty}</p>
          <p>${ex.instructions}</p>
        `;
        exerciseListDiv.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      exerciseListDiv.innerHTML = '❌ Failed to load exercises.';
    });
}




