import React from "react";
import { useSelector } from "react-redux";

import WeaklyStatistics from "components/weaklyStatistics/weaklyStatistics";
import DailyStatistics from "components/dailyStatistics/dailyStatistics";
import {
  SectionWrapper,
  SectionTitle,
} from "templates/homePage/homePage.styled";
import { SectionSubTitle } from "./statistics.styled";

const StatisticsPage = () => {
  const data = useSelector((state) => state.weather.weather);

  return (
    <SectionWrapper>
      <SectionTitle isStatistics>
        Weather and forecast in {data.timezone}
      </SectionTitle>
      <SectionSubTitle>Weekly Temperature</SectionSubTitle>
      <WeaklyStatistics />
      <SectionSubTitle>5 Day Weather Forecast</SectionSubTitle>
      <DailyStatistics />
    </SectionWrapper>
  );
};

export default StatisticsPage;
