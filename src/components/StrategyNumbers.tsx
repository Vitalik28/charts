import React from 'react';
import { Button } from 'react-bootstrap';
import { useActions } from '../hooks/useActions';

const numberStrategy = [1, 2, 3];
const StrategyNumbers = () => {
  const { getStrategyByNum } = useActions();

  return (
    <div className='strategy'>
      <h3>Номер стратегии №</h3>
      {numberStrategy.map((num, ind) => (
        <Button key={ind} onClick={() => getStrategyByNum(num)}>
          {num}
        </Button>
      ))}
    </div>
  );
};

export default StrategyNumbers;
