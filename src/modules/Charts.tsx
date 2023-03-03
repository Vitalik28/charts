import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Chart from '../components/Chart';
import Currensy from '../components/Currensy';
import StrategyNumbers from '../components/StrategyNumbers';
import { useAppSelector } from '../hooks/hooks';

const Charts = () => {
  const { data_btc, data_usd, isLoading } = useAppSelector(
    (state) => state.charts
  );
  const [currensy, setCurrensy] = useState('');

  const chooseCurrensy = (value: string) => {
    setCurrensy(value);
  };
  return (
    <>
      <StrategyNumbers />
      <Currensy onClick={chooseCurrensy} />
      {isLoading || !data_btc.length ? (
        <Spinner />
      ) : (
        <Chart state={currensy === 'BTS' ? data_btc : data_usd} />
      )}
    </>
  );
};

export default Charts;
