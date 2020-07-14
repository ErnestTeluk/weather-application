import { GET_LOCALIZATION } from "state/actions/types";

export const getLocalization = (localization) => (dispatch) => {
  dispatch({
    type: GET_LOCALIZATION,
    payload: { ...localization },
  });
};
