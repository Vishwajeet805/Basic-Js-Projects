const apiKey = "14010a27b2f72161cae30fd5883ba037";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = 
            `Temperature: ${data.main.temp} °C`;
        document.getElementById("description").innerText = 
            `Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = 
            `Humidity: ${data.main.humidity}%`;

    } catch (error) {
        alert("Error fetching data");
    }
}