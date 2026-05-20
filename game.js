let inventory = [];
let dialogueIndex = 0;

const story = document.getElementById("story");
const choices = document.getElementById("choices");
const inventoryList = document.getElementById("inventory");
const npcDialogue = document.getElementById("npcDialogue");

function startGame() {
  story.innerHTML =
    "You enter the abandoned library. A silver key rests on the desk.";

  choices.innerHTML = `
  <button onclick="takeKey()">Take Key</button>
  <button onclick="talkToCaretaker()">Talk to Caretaker</button>
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

function talkToCaretaker() {

  if (inventory.includes("Silver Key")) {

    npcDialogue.innerHTML = `
      <p>
        <strong>${caretaker.name}:</strong>
        "I see you've found the Silver Key..."
      </p>
    `;

    return;
  }

  npcDialogue.innerHTML = `
    <p>
      <strong>${caretaker.name}:</strong>
      "${caretaker.dialogue[dialogueIndex]}"
    </p>
  `;

  dialogueIndex++;

  if (dialogueIndex >= caretaker.dialogue.length) {
    dialogueIndex = 0;
  }
}

function updateInventory() {
  inventoryList.innerHTML = "";

  inventory.forEach(item => {
    inventoryList.innerHTML += `<li>${item}</li>`;
  });
}

startGame();
