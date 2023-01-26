let searchBtn = document.querySelector(".search-btn");
var searchedEl = document.querySelector(".searched-cities");

function findCity(event) {
    event.preventDefault();
    const appKey = "5d0479bcef657d162bba17e27204ff00";
    const locationEl = document.querySelector("#input-city").value;
    const units = "imperial";
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${locationEl}&appid=${appKey}&units=${units}`;
    const currentDate = new Date().toLocaleDateString('en-us', { year: "numeric", day: "numeric", month: "short" });
    const currNameDateEl = document.querySelector(".location-date");
    const currTemperatureEl = document.querySelector(".current-temperature");
    const currFeelsLike = document.querySelector(".current-feels-like");
    const currHumidtyEl = document.querySelector(".current-humidity");
    const currWindSpeed = document.querySelector(".current-wind-speed");
    const fiveDayURL = `api.openweathermap.org/data/2.5/forecast?q=${locationEl}&appid=${appKey}`

    fetch(cityURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //once the data is processed I want to store whatever value came from locationEl into cities array
            currNameDateEl.textContent = `${data.name} (${currentDate})`
            currTemperatureEl.textContent = `Temperature: ${data.main.temp}°F`;
            currFeelsLike.textContent = `Feels Like: ${data.main.feels_like}°F`
            currHumidtyEl.textContent = `Humidity: ${data.main.humidity}%`;
            currWindSpeed.textContent = `Wind Speed: ${data.wind.speed}mph`;
        });
}

searchBtn.addEventListener("click", findCity);