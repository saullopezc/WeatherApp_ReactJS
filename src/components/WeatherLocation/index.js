import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import Location from './Location';
import './styles.css';
import WeatherData from './WeatherData';

const WeatherLocation = ({onWeatherLocationClick,city,data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city}></Location>
    {data ? <WeatherData data={data}></WeatherData>:
    <CircularProgress size={50}/>}
    </div>);

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClic: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })

}

export default WeatherLocation;