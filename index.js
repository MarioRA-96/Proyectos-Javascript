// Get DOM elements
const container = document.querySelector(".container");
const searchBox = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

// Add click event listener to search button
searchBox.addEventListener("click", () => {

    // Get API key and city name
    const APIKey = "595cbb31408f0204dfb6484c053d3199";
    const city = document.querySelector(".search-box input").value;

    // If city is not entered, exit function
    if (city === "") return;

    // Fetch weather data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(json => {
            // If city is not found, show error message
            if (json.cod === "404") {
                container.style.height = "400px";
                weatherBox.style.display = "none";
                weatherDetails.style.display = "none";
                error404.style.display = 'block';
                error404.classList.add("fadeIn");
                return;
            }
            error404.style.display = 'none';
            error404.classList.remove("fadeIn");

            // Update weather data on the page
            const image = document.querySelector(".weather-box img");
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = "img/clear.png";
                    break;
                case 'Rain':
                    image.src = "img/rain.png";
                    break;
                case 'Snow':
                    image.src = "img/snow.png";
                    break;
                case 'Clouds':
                    image.src = "img/cloud.png";
                    break;
                case 'Haze':
                    image.src = "img/mist.png";
                    break;
                default:
                    image.src = "";
            }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/H`;
            weatherBox.style.display = "";
            weatherDetails.style.display = "";
            container.style.height = "590px";
        })

})

