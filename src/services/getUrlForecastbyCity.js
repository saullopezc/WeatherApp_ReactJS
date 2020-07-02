import { api_key, url_base_forecast } from "./../constants/api_url";

export const getUrlForcastbyCity = (city) => {
  return `${url_base_forecast}?q=${city}&APPID=${api_key}`;
};

export default getUrlForcastbyCity;

