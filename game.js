let inventory = [];

const story = document.getElementById("story");
const choices = document.getElementById("choices");
const inventoryList = document.getElementById("inventory");

function startGame() {
  story.innerHTML =
    "You enter the abandoned library. A silver key rests on the desk.";

  choices.innerHTML = `
    <button onclick="takeKey()">Take Key</button>
    <button onclick="leaveRoom()">Leave Room</button>
  `;
}

function takeKey() {
  inventory.push("Silver Key");
  updateInventory();

  story.innerHTML =
    "You picked up the Silver Key.";

  choices.innerHTML =
    `<button onclick="leaveRoom()">Continue</button>`;
}

function leaveRoom() {
  story.innerHTML =
    "The hallway is dark and silent...";
    
  choices.innerHTML = "";
}

function updateInventory() {
  inventoryList.innerHTML = "";

  inventory.forEach(item => {
    inventoryList.innerHTML += `<li>${item}</li>`;
  });
}

startGame();
