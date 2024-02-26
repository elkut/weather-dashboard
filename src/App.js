import React, { useState, createContext } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import './App.css';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Weather API endpoint
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`; // Forecast API endpoint

    try {
      const response = await fetch(weatherUrl);
      if (!response.ok) {
        throw new Error('Weather data fetch failed');
      }
      const data = await response.json();
      setCurrentWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    try {
      const response = await fetch(forecastUrl);
      if (!response.ok) {
        throw new Error('Forcast data fetch failed');
      }
      const data = await response.json();
      setForecast(data);
    } catch (error) {
      console.error("Error fetching forcast data:", error);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>

        <SearchBar onSearch={handleSearch} />
        {currentWeather && <CurrentWeather weatherData={currentWeather} />}
        <div className="switch">
          <lable>{theme === "light" ? "Light Mode" : "Dark Mode"}</lable>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        {/*{forecast && <WeatherForecast forecastData={forecast} />} */}
      </div>
    </ThemeContext.Provider>
  );

} //App

export default App;
