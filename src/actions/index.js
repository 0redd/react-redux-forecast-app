import axios from 'axios';

const API_KEY = '00101bcc0c8e426bfcc07a38fa0cccdd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log(request, 'from actions');

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
