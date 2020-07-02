import getUrlForecastbyCity from "./../services/getUrlForecastbyCity";
import getUrlWeatherbyCity from "./../services/getUrlWeatherbyCity";
import transformForecast from "./../services/transformForecast";
import transformWeather from "./../services/transformWeather";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = (payload) => {
  return (dispatch, getState) => {
    const api_forecast = getUrlForecastbyCity(payload);
    dispatch(setCity(payload));

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    const now = new Date();

    if (date && (now - date) < 1*300*1000){
      return;
    }

    return fetch(api_forecast)
      .then((resolve) => resolve.json())
      .then((forecast_data) => {
        const forecastData = transformForecast(forecast_data);

        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = (payload) => {
  return (dispatch) => {
    payload.forEach((city) => {
      dispatch(getWeatherCity(city));

      const api_weather = getUrlWeatherbyCity(city);
      fetch(api_weather)
        .then((resolve) => {
          return resolve.json();
        })
        .then((data) => {
          const weather = transformWeather(data);
          dispatch(setWeatherCity({city, weather}));
        });
    });
  };
};
