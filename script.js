let users = ["David", "Cindy", "Owen"];
let entries = [
  document.getElementById("user1"),
  document.getElementById("user2"),
  document.getElementById("user3"),
];
let userList = document.getElementById("userList");
let container = document.querySelector(".container");

function updateUserList() {
  userList.textContent = users.join("\n");
}

function addUser() {
  users = entries.map((entry) => entry.value.trim()).filter((user) => user);
  updateUserList();
}

function anotherUser() {
  let newEntry = document.createElement("input");
  newEntry.type = "text";
  newEntry.placeholder = "Enter another name";
  newEntry.className = "user-input";
  container.insertBefore(newEntry, document.querySelector(".button-group"));
  entries.push(newEntry);
}

function playSound(audioElement) {
  audioElement.play();
}

function pickRandomUser() {
  if (users.length === 0) {
    alert("No users to pick from.");
    return;
  }

  let beepSound = document.getElementById("beepSound");
  let winSound = document.getElementById("winSound");

  function animatePick() {
    let pickCount = 0;
    let pickInterval = setInterval(() => {
      if (pickCount >= 20) {
        clearInterval(pickInterval);
        let pickedUser = users[Math.floor(Math.random() * users.length)];
        playSound(winSound);
        alert(`THE WINNER IS: ${pickedUser}`);
        return;
      }
      let pickedUser = users[Math.floor(Math.random() * users.length)];
      userList.textContent = users.join("\n") + `\n\nPicking: ${pickedUser}`;
      playSound(beepSound);
      pickCount++;
    }, 100);
  }

  animatePick();
}

document.addEventListener("DOMContentLoaded", updateUserList);
