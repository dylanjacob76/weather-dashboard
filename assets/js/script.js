// Acceptance Criteria
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


// on click of search button take the value of the input field and console.log the data return of that specific city.
var searchBtn = document.querySelector(".search-btn");

function findCity(event) {
    event.preventDefault();
    var appKey = "5d0479bcef657d162bba17e27204ff00";
    var locationEl = document.querySelector("#input-city").value;
    var units = "imperial";
    var cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${locationEl}&appid=${appKey}&units=${units}`;
    var currentDate = new Date().toLocaleDateString('en-us', { year: "numeric", day: "numeric", month: "short" });

    fetch(cityURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // once loaded populate the current weather information to the webpage based on what city was searched
            var currNameDateEl = document.querySelector(".location-date");
            var currTemperatureEl = document.querySelector(".current-temperature");
            var currHumidtyEl = document.querySelector(".current-humidity");
            currNameDateEl.textContent = `${data.name} (${currentDate})`
            currTemperatureEl.textContent = `Temperature: ${data.main.temp}°F`;
            currHumidtyEl.textContent = `Humidity: ${data.main.humidity}%`;

        })
}

searchBtn.addEventListener("click", findCity);
