import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
const Forecast = ({ data }) => {
  const Day_Week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDay = new Date().getDay();
  console.log(currentDay);
  const forecastDay = Day_Week.slice(currentDay, Day_Week.length).concat(
    Day_Week.slice(0, currentDay)
  );
  console.log(forecastDay);
  return (
    <>
      <span className="tittle">Daily</span>
      <Accordion>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="forecast">
                  <img
                    className="weather-img"
                    alt="weather-icon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDay[idx]}</label>
                  <label className="desc">{item.weather[0].description}</label>
                  <label className="min-max">
                    H:{Math.round(item.main.temp_max)}°C / L:
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="details-grid">
                <div className="details-grid-item">
                  <label>Temperature : </label>
                  <label>{Math.round(item.main.temp)}°C</label>
                </div>
                <div className="details-grid-item">
                  <label>Pressure : </label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="details-grid-item">
                  <label>Feels like : </label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className="details-grid-item">
                  <label>Humidity : </label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="details-grid-item">
                  <label>Wind: </label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="details-grid-item">
                  <label>Sea level : </label>
                  <label>{item.main.sea_level}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
