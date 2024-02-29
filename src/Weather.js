import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Chicago",
    date: "Friday 07:30",
    humidity: "75",
    wind: "2.3",
    description: "Cloudy",
    temperature: "34",
    iconUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
  };
  return (
    <div className="container">
      <form>
        <input
          className="text-input"
          type="text"
          placeholder="Enter a city..."
        />
        <input className="search-btn" type="submit" value="Search" />
      </form>
      <div className="current-weather">
        <div>
          <h1>{weatherData.city}</h1>
          <p className="date">{weatherData.date}</p>
          <p></p>
          <p className="current-stats">
            Humidity: {weatherData.humidity}%, Wind: {weatherData.wind}mph
          </p>
        </div>
        <div>
          <img src={weatherData.iconUrl} alt="weather icon"/>
        </div>
        <div>
          <p className="current-temp">
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">&#176;F</span>
          </p>
          <p className="current-condition">{weatherData.description}</p>
        </div>
      </div>
    </div>
  );
}
