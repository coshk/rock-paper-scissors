import React, {FC, useEffect} from 'react';
import {observer} from 'mobx-react';
import cn from 'classnames';

import PlayStore from './PlayStore';
import './play.css';
import ChoiceStore from '../Choice/ChoiceStore';

interface Props {
  accord: boolean;
  setAccord: React.Dispatch<React.SetStateAction<boolean>>;
}

const Play: FC<Props> = observer(({accord, setAccord}) => {
  const {counter, setCounter, play, setPlay} = PlayStore;
  const {setTool} = ChoiceStore;

  useEffect(() => {
    if (play && counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter === 0) {
      setPlay(false);
    }
  }, [counter, setCounter, play, setPlay])

  const title = play ? counter : 'PLAY';

  return (
    <div className="playButtons">
      <button
        type="button"
        onClick={() => {
          setCounter(5);
          setPlay(true);
        }}
        // className={play ? 'btn disabled': 'btn'}
        className={cn({
          'btn': !play && accord,
          'btn disabled': play,
          'btn gameover': accord,
        }, 'btn')}
        disabled={(counter < 5 && counter > 0) || accord}
      >{accord ? 'game over' : title}</button>
      {(!play && accord) &&  <button
          className="btn2 restart"
          onClick={() => {
            setTool('');
            setAccord(false)
          }}>restart</button>}
    </div>
  );
});

export default Play;
