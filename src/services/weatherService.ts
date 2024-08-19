interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number; humidity: number; pressure: number };
  wind: { speed: number };
  visibility: number;
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const API_KEY = 'b163e8bf22f67363e91505c7807cf0f7';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};
