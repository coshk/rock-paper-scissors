import React, {FC} from 'react'
import { observer } from 'mobx-react'

import ChoiceStore from './ChoiceStore';
import {arrow, rps} from '../../assets'
import './choice.css';

const Choice: FC = observer(() => {
  const {tool, setTool} = ChoiceStore;

  return (
    <div className="choice">
      <div className="group">
        {rps.map((t) => {
          return (
            <label key={t} className="lbl">
              <input
                type="radio"
                className="inp"
                name="tool"
                value={t}
                onChange={(e) => setTool(e.target.value)}
                checked={tool === t}
                disabled={tool.length > 0}
                data-testid={t}
              />
              {t}
            </label>
          );
        })}
        {tool.length === 0 && <div className="arrow" data-testid="arrow">
          <img src={arrow} alt="arrow-left" />
        </div>}
      </div>
    </div>
  );
});

export default Choice;
