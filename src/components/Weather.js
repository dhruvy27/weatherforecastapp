import React from "react";

import "../styles/Weather.css";

export default function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather">
      <div className="Weather__info">
        
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list__temperature-symbol">°C</sup>
          </li>
          <li> Humidity: {weatherInfo.current.humidity}% </li>
          <li>
            {" "}
            Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h{" "}
          </li>
        </ul>
      </div>
      <div className="Weather__other-info">
        <h2 className="other-info__city">
          {location.city || location.town},{" "}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info__clouds">{date}</h3>
        <h3 className="other-info__clouds">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
