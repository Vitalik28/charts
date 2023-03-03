import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

interface CurrensyProps {
  onClick: (value: string) => void;
}

const currensy = ['USD', 'BTS'];

const Currensy: FC<CurrensyProps> = ({ onClick }) => {
  return (
    <div className="currensy">
      <h3>Валюта</h3>
      {currensy.map((cur, i) => (
        <Button className="m-10" size="lg" key={i} onClick={() => onClick(cur)}>
          {cur}
        </Button>
      ))}
    </div>
  );
};

export default Currensy;
