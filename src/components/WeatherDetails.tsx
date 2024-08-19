import React from 'react';

interface WeatherDetailsProps {
  weather: {
    main: { pressure: number };
    wind: { speed: number };
    visibility: number;
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  return (
    <div className="weather-details">
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Visibility: {weather.visibility / 1000} km</p>
    </div>
  );
};

export default WeatherDetails;
