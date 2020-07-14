import axios from "axios";

const weatherApi = axios.create({
  baseUrl: `https://api.openweathermap.org/data/2.5/onecall?`,
});

export default weatherApi;
