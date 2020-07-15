import React from "react";

import WeekTracker from "components/weekTracker/weekTracker";
import DayTracker from "components/dayTracker/dayTracker";

const Statistics = () => {
  const WeekData = WeekTracker();
  const DayData = DayTracker();

  console.log(WeekData);
  console.log(DayData);

  return <>test</>;
};

export default Statistics;
