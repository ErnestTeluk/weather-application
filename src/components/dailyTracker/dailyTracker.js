import { useSelector } from "react-redux";

const DailyTracker = () => {
  const data = useSelector((state) => state.weather.weather);

  const sliceData = data.daily.slice(0, 5);

  return sliceData.map((day) => ({
    dayTemp: day.temp.day,
    nightTemp: day.temp.night,
    morningTemp: day.temp.morn,
    humidity: day.humidity,
    dt: day.dt,
  }));
};

export default DailyTracker;
