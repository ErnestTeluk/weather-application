import { useSelector } from "react-redux";

const WeekTracker = () => {
  const data = useSelector((state) => state.weather.weather);

  const sliceData = data.daily.slice(3);

  const dataMapped = () => {
    return sliceData.map((day) => ({
      maxTemp: day.temp.max,
      minTemp: day.temp.min,
      meanTemp: day.temp.min + day.temp.max / 2,
    }));
  };

  const MaxTempReducer = (prev, next) =>
    prev.maxTemp > next.maxTemp ? prev : next;
  const ShowMax = dataMapped().reduce(MaxTempReducer, dataMapped);

  const MinTempReducer = (prev, next) =>
    prev.minTemp < next.minTemp ? prev : next;
  const ShowMin = dataMapped().reduce(MinTempReducer, dataMapped);

  const ShowMean = () => {
    return (
      dataMapped()
        .map((mean) => mean.meanTemp)
        .reduce((a, b) => a + b, 0) / dataMapped().length
    );
  };

  function ShowMode(arr) {
    let freq = 0;
    let freqNum;
    const list = [];

    arr.forEach(function (num) {
      const foundNum = list.find(function (el) {
        return el.num === num;
      });

      if (foundNum) {
        foundNum.count += 1;
        if (foundNum.count > freq) {
          freqNum = num;
          freq = foundNum;
        }
      } else list.push({ num, count: 1 });
    });

    return freqNum;
  }

  return {
    minTemp: ShowMin.minTemp.toFixed(0),
    maxTemp: ShowMax.maxTemp.toFixed(0),
    MeanTemp: ShowMean().toFixed(0),
    MoadTemp: ShowMode(dataMapped().map((mean) => mean.meanTemp.toFixed(0))),
  };
};

export default WeekTracker;
