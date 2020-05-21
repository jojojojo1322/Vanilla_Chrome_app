const greeting = document.querySelector(".jsGreetings");

const USER_NAME = "currentUser";
const CU = localStorage.getItem(USER_NAME);

function askName() {
  const Name = prompt("your Name?");
  localStorage.setItem(USER_NAME, Name);
}
function paintGreeting() {
  greeting.innerText = `Hi! ${CU}`;
}
function loadName() {
  if (CU === null) {
    askName();
    greeting.innerText = `Hi! ${localStorage.getItem(USER_NAME)}`;
  } else {
    paintGreeting();
  }
}

function init() {
  loadName();
}
init();
