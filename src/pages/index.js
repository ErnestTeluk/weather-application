import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Localization from "hoc/localization/localization";
import { getWeather } from "state/actions/weather";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const IndexPage = () => {
  const dispatch = useDispatch();

  const currentLocation = useSelector(
    (state) => state.localization.localization
  );

  return (
    <>
      <StyledDiv>Welcome to Wheather App</StyledDiv>
      <button
        type="button"
        onClick={() => dispatch(getWeather(currentLocation))}
      >
        Sprawdź pogode
      </button>
    </>
  );
};

export default Localization(IndexPage);
