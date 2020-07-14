import { GET_LOCALIZATION } from "state/actions/types";

const INITIAL_STATE = {
  localization: { lat: 52.229676, lot: 21.012229 },
};

export default function (state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case GET_LOCALIZATION: {
      return { ...state, localization: actions.payload };
    }
    default:
      return state;
  }
}
