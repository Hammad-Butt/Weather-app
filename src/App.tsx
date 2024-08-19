import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import { fetchWeatherData } from './services/weatherService';
import './styles/App.css';

interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number; humidity: number; pressure: number };
  wind: { speed: number };
  visibility: number;
}

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = async () => {
    const data = await fetchWeatherData(city);
    setWeather(data);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
        </div>
      )}
    </div>
  );
};

export default App;
