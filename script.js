const API_KEY = "270d48b3ecf1316fd5f59243dd4bcaae"; // Replace this later with your real key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }
    const data = await response.json();
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("weatherResult").innerHTML = "Error fetching weather data.";
  }
}
