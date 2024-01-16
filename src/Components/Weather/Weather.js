import React from "react";
import "./weather.css";

const Weather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <span className="city"> {data.city}</span>

          <p className="temp">{Math.round(data.main.temp)}°C</p>
        </div>

        <img alt="icon" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="des">{data.weather[0].description}</p>

        <p className="min-max">H:{Math.round(data.main.temp_max)}°C / L:{Math.round(data.main.temp_min)}°C</p>
      </div>
    </div>
  );
};

export default Weather;
