import { GET_WEATHER, GET_WEATHER_ERROR } from "state/actions/types";

const INITIAL_STATE = {
  weather: [],
};

export default function weather(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case GET_WEATHER:
      return { ...state, weather: actions.payload };
    case GET_WEATHER_ERROR:
      return { ...state, weather: actions.payload };
    default:
      return state;
  }
}
