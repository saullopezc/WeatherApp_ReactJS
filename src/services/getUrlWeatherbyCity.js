import { api_key, url_base_weather } from "./../constants/api_url";

const getUrlWeatherbyCity = (city) => {
  return `${url_base_weather}?q=${city}&APPID=${api_key}`;
};

export default getUrlWeatherbyCity;
