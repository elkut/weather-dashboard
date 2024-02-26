// WeatherForecast.js
import React from 'react';

function WeatherForecast({ forecastData }) {
    return (
        <div className="ForecastItem ">
            <h2>Weather Forecast</h2>
            {forecastData.list.map((forecast, index) => (
                <div key={index}>
                    <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                    <p>Temperature: {forecast.main.temp} °C</p>
                    <p>Condition: {forecast.weather[0].main}</p>
                </div>
            ))}
        </div>
    );
}

export default WeatherForecast;
