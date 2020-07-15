import axios from "axios";
import { GET_WEATHER, GET_WEATHER_ERROR } from "state/actions/types";
import { navigate } from "gatsby";

export const getWeather = (currentLocation) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLocation.lat}&lon=${currentLocation.lon}&units=metric&exclude=current,hourly,minutely&cnt=5&appid=${process.env.GATSBY_WEATHER_API_KEY}`
    );
    dispatch({ type: GET_WEATHER, payload: response.data });
    navigate("/statistics");
  } catch (e) {
    dispatch({ type: GET_WEATHER_ERROR, payload: "error" });
  }
};
