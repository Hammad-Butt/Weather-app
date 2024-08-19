import React from 'react';

interface WeatherCardProps {
  weather: {
    name: string;
    weather: { description: string }[];
    main: { temp: number; humidity: number };
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <h3>{weather.main.temp}°C</h3>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
