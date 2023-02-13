const form = document.querySelector("form");
const city = document.querySelector("#city");
const weather = document.querySelector("#weather");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = city.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=e3a4e9d0288aeb1e472745504ffc8792`)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp - 273.15;
      weather.innerHTML = `Temperature in ${cityValue}: ${temperature.toFixed(2)}°C`;
    })
    .catch((error) => {
      weather.innerHTML = "City not found";
    });
});
