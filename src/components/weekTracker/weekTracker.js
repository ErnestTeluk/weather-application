import { useSelector } from "react-redux";

const WeekTracker = () => {
  const data = useSelector((state) => state.weather.weather);

  const sliceData = data.daily.slice(3);

  return sliceData.map((day) => ({
    dayTemp: day.temp.day,
    nightTemp: day.temp.night,
    morningTemp: day.temp.morn,
    humidity: day.humidity,
  }));
};

export default WeekTracker;
