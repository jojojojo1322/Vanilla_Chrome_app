const clockContatiner = document.querySelector(".jsClock");
clockTitle = clockContatiner.querySelector("h1");

function getTime() {
  // 시간 가져옴
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
