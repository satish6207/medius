import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0faba0ad7e8baa615b588a1905b685c3`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Date & Time: {weatherData.current?.dt && new Date(weatherData.current.dt * 1000).toLocaleTimeString()}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
        
      )}
    </div>
  );
}