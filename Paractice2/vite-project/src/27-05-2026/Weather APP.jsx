import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "YOUR_REAL_API_KEY"; 

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        alert("City not found");
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "200px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={getWeather}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>📍 Location: {weather.name}, {weather.sys.country}</h2>
          <h3>🌡 Temperature: {weather.main.temp}°C</h3>
          <p>☁ Weather: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;