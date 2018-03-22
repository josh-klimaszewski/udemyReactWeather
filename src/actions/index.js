import axios from 'axios';

const API_KEY = '023c051135859f08c3a27ea8eaf748e4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    
    // return promis as the payload
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}