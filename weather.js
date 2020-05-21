const weather = document.querySelector(".jsWeather");

const API_KEY = "9aeaf6a6ce9d3c42e466d60e87e52a3f";
const COORDS = "coords";

function LocalSave(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `현재 ${place}의 온도는 ${temp}도 입니다.`;
    });
}

function handleGeo() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  LocalSave(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError(e) {
  alert(`위치를 잡지 못했습니다.`);
}
function loadCoords() {
  const currentCoodrs = localStorage.getItem(COORDS);

  if (currentCoodrs !== null) {
    getWeather(
      JSON.parse(currentCoodrs).latitude,
      JSON.parse(currentCoodrs).longitude
    );
  } else {
    handleGeo();
  }
}

function init() {
  loadCoords();
}
init();
