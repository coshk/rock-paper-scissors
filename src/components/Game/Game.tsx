import React, {FC, useEffect, useState} from 'react'
import {observer} from 'mobx-react';

import Play from '../Play/Play';
import Winner from '../Winner/Winner';
import PlayStore from '../Play/PlayStore';
import ChoiceStore from '../Choice/ChoiceStore';
import {rps} from '../../assets';
import './game.css';

const Game: FC = observer(() => {
  const {tool} = ChoiceStore;
  const {counter, play} = PlayStore;

  const [random, setRandom] = useState(0);
  const [accord, setAccord] = useState(false);

  useEffect(() => {
    if (play && counter === 0) {
      setRandom(Math.floor(Math.random() * 3));
      setAccord(true);
    }
  }, [play, counter])

  return (
    <div className="game">
      <div className="game__line">
        <div className="itemContainer">
          <p className="item">{tool}</p>
        </div>
        <div className="itemContainer play">
          {tool ? <Play accord={accord} setAccord={setAccord}/> : <h5>choose your weapon</h5>}
        </div>
        <div className="itemContainer"><p className="item">{accord && rps[random]}</p></div>
      </div>
      <div className="game__line">
        {accord && <Winner left={tool} right={rps[random]} />}
      </div>
    </div>
  );
});

export default Game;
