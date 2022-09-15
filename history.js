const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, speedAccuracy) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");
  const speed = speedAccuracy[0];
  const accuracy = speedAccuracy[1];

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>Your speed: <span class="bold">${speedAccuracy[0]}</span> word per minute</p>
  <p>Accuracy: <span class="bold">${speedAccuracy[1]}</span>%</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, speed, accuracy });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
  <p>Your speed: <span class="bold">${test.speed}</span> word per minute</p>
  <p>Accuracy: <span class="bold">${test.accuracy}</span>%</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
