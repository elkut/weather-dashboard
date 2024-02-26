// CurrentWeather.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
function CurrentWeather({ weatherData }) {
    const currentDate = format(new Date(), 'MMMM dd, yyyy');
    return (
        <Card className="CurrentWeatherCard" style={{ width: '18rem' }}>
            <Card.Body>
                {weatherData ? (
                    <div>
                        <Card.Title><h3>{weatherData.name}</h3></Card.Title>
                        <Card.Text>
                            <h4>Current Weather</h4>
                            <p>Date: {currentDate}</p>
                            <p>Temperature: {weatherData.main.temp} °C</p>
                            <p>Condition: {weatherData.weather[0].main}</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                        </Card.Text>
                    </div>
                ) : (
                    <Card.Text>No weather data available </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}

export default CurrentWeather;
