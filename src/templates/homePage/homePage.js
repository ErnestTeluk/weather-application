import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeather } from "state/actions/weather";
import {
  SectionWrapper,
  SectionTitle,
  SectionText,
  SectionButton,
} from "./homepage.styled";

const HomePage = () => {
  const dispatch = useDispatch();

  const currentLocation = useSelector(
    (state) => state.localization.localization
  );

  return (
    <SectionWrapper>
      <SectionTitle>Welcome to Weather App</SectionTitle>
      <SectionText>
        Press the button to check the weather forecast for the next 5 days in
        your location
      </SectionText>
      <SectionButton
        type="button"
        onClick={() => dispatch(getWeather(currentLocation))}
      >
        Check Weather
      </SectionButton>
    </SectionWrapper>
  );
};

export default HomePage;
