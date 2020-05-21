const TODOFORM = document.querySelector(".jsToDoForm"),
  INPUT = TODOFORM.querySelector("input"),
  TODOLIST = document.querySelector(".jsToDoList");

const TODO = "TODO";

let todoArray = [];

function saveTODO() {
  localStorage.setItem(TODO, JSON.stringify(todoArray));
}

function inputData(e) {
  if (e.keyCode === 13) {
    /* preventDefault를 밖으로 꺼내놓으면 
      상위로직에 계속 영향을 끼쳐 영문자나 숫자가 안써짐/ 스페이스키 안먹음*/
    e.preventDefault();
    const tododata = INPUT.value;
    paintTodo(tododata);
  }
  tododata = "";
}
function deleteTODO(e) {
  const btn = e.target;
  const li = btn.parentNode;
  TODOLIST.removeChild(li);
  /* array filter 새로운 배열을 만듬 지운다음
    id를 비교해 맞지않은것을 지운 후 새로 배열*/
  const cleanTODO = todoArray.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  todoArray = cleanTODO;

  saveTODO();
}

function paintTodo(e) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todoArray.length + 1;

  delBtn.innerText = "X";
  span.innerText = e;
  delBtn.addEventListener("click", deleteTODO);
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  TODOLIST.appendChild(li);

  const TODOobj = {
    text: e,
    id: newId,
  };

  todoArray.push(TODOobj);
  saveTODO();
}

function loadTODO() {
  const loadedTODO = localStorage.getItem(TODO);
  if (loadedTODO !== null) {
    const parsedTODO = JSON.parse(loadedTODO);
    parsedTODO.forEach(function (TODO) {
      paintTodo(TODO.text);
    });
  } else {
    INPUT.addEventListener("keydown", inputData);
  }
}

function init() {
  loadTODO();
  INPUT.addEventListener("keydown", inputData);
}
init();
