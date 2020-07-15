import React from "react";

import WeekTracker from "components/weekTracker/weekTracker";
import {
  DataTrackerRow,
  DataTrackerItem,
  TrackerTitle,
  TrackerValue,
} from "./weaklyStatistics.styled";

const WeaklyStatistics = () => {
  const WeekData = WeekTracker();

  return (
    <>
      <DataTrackerRow>
        <DataTrackerItem>
          <TrackerTitle>Minimum Temperature</TrackerTitle>
          <TrackerValue>{WeekData.minTemp}&nbsp;&deg;</TrackerValue>
        </DataTrackerItem>
        <DataTrackerItem>
          <TrackerTitle>Maximum Temperature</TrackerTitle>
          <TrackerValue>{WeekData.maxTemp}&nbsp;&deg;</TrackerValue>
        </DataTrackerItem>
        <DataTrackerItem>
          <TrackerTitle>Mean Temperature</TrackerTitle>
          <TrackerValue>{WeekData.MeanTemp}&nbsp;&deg;</TrackerValue>
        </DataTrackerItem>
        {(() => {
          if (WeekData.ModeTemp === undefined) {
            return null;
          }
          return (
            <DataTrackerItem>
              <TrackerTitle>Mode Temperature</TrackerTitle>
              <TrackerValue>{WeekData.ModeTemp}&nbsp;&deg;</TrackerValue>
            </DataTrackerItem>
          );
        })()}
      </DataTrackerRow>
    </>
  );
};

export default WeaklyStatistics;
