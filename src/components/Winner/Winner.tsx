import React, {FC} from 'react'

import './winner.css';

import {chooseWinner} from './chooseWinner';

interface Props {
  left: string;
  right: string;
}

const Winner: FC<Props> = ({left, right}) => {
  const winner = chooseWinner(left, right);

  return (
    <div className="winner">
      {`Winner is ${winner}`}
    </div>
  );
};

export default Winner;
