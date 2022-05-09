//change date
let now = new Date();

function getDay() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayToday = days[now.getDay()];

  return `${dayToday}`;
}

let changeDate = document.querySelector("#date-today");
changeDate.innerHTML = getDay(now);

//get current time
function getTime() {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

let changeTime = document.querySelector("#time-today");
changeTime.innerHTML = getTime(now);

// get new Temperatire
function getTemperatureData(response) {
  let cityTemp = document.querySelector("#display-temp");
  let newTemp = Math.round(response.data.main.temp);
  cityTemp.innerHTML = newTemp;

  let cityPrecipitation = document.querySelector("#precipitation");
  let newPrecipitation = Math.round(response.data.main.temp);
  cityPrecipitation.innerHTML = newPrecipitation;

  let cityWind = document.querySelector("#wind");
  let newWind = Math.round(response.data.wind.speed);
  cityWind.innerHTML = newWind;

  let cityHumidity = document.querySelector("#humidity");
  let newHumidity = Math.round(response.data.main.humidity);
  cityHumidity.innerHTML = newHumidity;

 

}

//change city

function changeData(event) {
  event.preventDefault()
//change CityName Display
  let cityName = document.querySelector("#city-name");
  let cityInput = document.querySelector("#city-input");
    cityName.innerHTML = cityInput.value;

//change Temperature Displayed
let city = cityInput.value
let units = "metric";
let apiKey = "8610ca333f0a21e0cddc35f7704f0799";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  apiKey +
  "&units=" +
  units;

axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperatureData);

}

let newData = document.querySelector("#search-form, #other-conditions, #weather-description");
newData.addEventListener("submit", changeData);

