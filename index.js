function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = "0o1f34252a459ee87e614bt4fc070a90";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {}

function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");

  // Assuming temperature is nested under data
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = `${Math.round(temperature)}°C`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

let apiKey = "0o1f34252a459ee87e614bt4fc070a90";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Paris&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
