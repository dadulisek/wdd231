document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "e95c77d66feec946651a03d09ac8117d"; // Replace with your actual API key
    const city = "Prague"; // Change to your preferred location
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    // Function to fetch and display current weather
    function getCurrentWeather() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temp = Math.round(data.main.temp);
                const high = Math.round(data.main.temp_max);
                const low = Math.round(data.main.temp_min);
                const humidity = data.main.humidity;
                const description = data.weather[0].description;
                const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

                // Convert sunrise & sunset from Unix timestamp
                const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                document.getElementById("current-weather").innerHTML = `
                    <div class="weather-card">
                        <img src="${icon}" alt="${description}">
                        <p><strong>${temp}°C</strong></p>
                        <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
                        <p>High: ${high}°</p>
                        <p>Low: ${low}°</p>
                        <p>Humidity: ${humidity}%</p>
                        <p>Sunrise: ${sunrise}</p>
                        <p>Sunset: ${sunset}</p>
                    </div>
                `;
            })
            .catch(error => console.error("Error fetching current weather:", error));
    }

    // Function to fetch and display 3-day forecast
    function getWeatherForecast() {
        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                let forecastHTML = "";
                const dailyTemps = {};

                // Process API response to extract daily temperatures
                data.list.forEach(entry => {
                    const date = entry.dt_txt.split(" ")[0]; // Extract date
                    if (!dailyTemps[date]) {
                        dailyTemps[date] = Math.round(entry.main.temp);
                    }
                });

                // Get the next 3 days
                const dates = Object.keys(dailyTemps).slice(0, 3);
                dates.forEach((date, index) => {
                    const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "long" });

                    if (index === 0) {
                        forecastHTML += `<p><strong>Today:</strong> ${dailyTemps[date]}°C</p>`;
                    } else {
                        forecastHTML += `<p><strong>${dayName}:</strong> ${dailyTemps[date]}°C</p>`;
                    }
                });

                document.getElementById("weather-forecast").innerHTML = forecastHTML;
            })
            .catch(error => console.error("Error fetching weather forecast:", error));
    }

    // Fetch weather data on page load
    getCurrentWeather();
    getWeatherForecast();
});