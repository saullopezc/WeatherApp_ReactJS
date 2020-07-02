import PropTypes from "prop-types";
import React from "react";
import ForecastItem from "./ForecastItem";
import "./styles.css";

const renderProgress = () => {
  return "Cargando pronostico extendido";
};

const renderForecastItemDays = (forecastData) => {
  return forecastData.map((forecast) => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    ></ForecastItem>
  ));
};

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className="forecast-title">Pronostico Extendido {city}</h2>
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

export default ForecastExtended;
