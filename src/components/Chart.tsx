import React, { FC, useMemo } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { useAppSelector } from '../hooks/hooks';
import { IData } from '../store/slices/charts.slice';

interface ChartsProps {
  state: IData[];
}
const Chart: FC<ChartsProps> = ({ state }) => {
  
  const dataChart = useMemo(() => {
    const obj: { [key: string]: string[] } = {};
    const arr = state.map((el) => ({
      value: el.value,
      time: new Date(el.time).toString().slice(4, 10),
    }));

    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i].time]) {
        obj[arr[i].time] = [];
      } else {
        obj[arr[i].time].push(arr[i].value);
      }
    }
    const keys = Object.keys(obj);

    const middle = keys.map((key) =>
      obj[key].reduce((acc, el) => acc + Number(el) / obj[key].length, 0)
    );

    return Array.from({ length: keys.length }, (el, i) => ({
      time: keys[i],
      value: middle[i],
    }));
  }, [state]);

  console.log(dataChart);

  return (
    <LineChart width={1000} height={500} data={dataChart}>
      <CartesianGrid strokeDasharray="3 3" />
      <Line
        type="linear"
        dataKey="value"
        stroke="#8884d8"
        dot={false}
        color="grey"
      />
      <XAxis type="category" dataKey="time" allowDuplicatedCategory={false} />
      <YAxis
        width={200}
        dataKey="value"
        type="number"
        domain={['dataMin', 'dataMax']}
      />
    </LineChart>
  );
};

export default Chart;
