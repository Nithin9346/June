import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const apiKey = process.env.REACT_APP_WEATHER_API_KEY || "YOUR_REAL_API_KEY";

  const handleSearch = async (e) => {
    e.preventDefault(); t
    
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
      );

      const data = await response.json();

      if (String(data.cod) !== "200") {
        setError(data.message || "City not found");
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
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
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2> Location: {weather.name}, {weather.sys.country}</h2>
          <h3> Temperature: {weather.main.temp}°C</h3>
          <p> Weather: {weather.weather[0].description}</p>
          <p> Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;