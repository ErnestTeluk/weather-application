import React from "react";

import DailyTracker from "components/dailyTracker/dailyTracker";
import {
  DailyTrackerRow,
  DailyTrackerItem,
  DateSection,
  ValuesSection,
  ValueItem,
  ValueTitle,
  ValueData,
  DateText,
} from "./dailyStatistics.styled";

const DailyStatistics = () => {
  const DailyData = DailyTracker();

  return (
    <>
      <DailyTrackerRow>
        {DailyData.map((day) => (
          <>
            <DailyTrackerItem>
              <DateSection>
                <DateText>{new Date(day.dt * 1000).toDateString()}</DateText>
              </DateSection>
              <ValuesSection>
                <ValueItem>
                  <ValueTitle>Day Temperature</ValueTitle>
                  <ValueData>{day.dayTemp}</ValueData>
                </ValueItem>
                <ValueItem>
                  <ValueTitle>Night Temperature</ValueTitle>
                  <ValueData>{day.nightTemp}</ValueData>
                </ValueItem>
                <ValueItem>
                  <ValueTitle>Morning Temperature</ValueTitle>
                  <ValueData>{day.morningTemp}</ValueData>
                </ValueItem>
                <ValueItem>
                  <ValueTitle>Humidity</ValueTitle>
                  <ValueData>{day.humidity}</ValueData>
                </ValueItem>
              </ValuesSection>
            </DailyTrackerItem>
          </>
        ))}
      </DailyTrackerRow>
    </>
  );
};

export default DailyStatistics;
