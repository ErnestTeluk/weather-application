import { combineReducers } from "redux";

import localization from "state/reducers/localization/localization";
import weather from "state/reducers/weather/weather";

export default combineReducers({
  localization,
  weather,
});
