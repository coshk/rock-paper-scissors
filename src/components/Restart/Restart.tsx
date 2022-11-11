import React, {FC, memo} from 'react';

interface Props {
  setTool: (arg0: string) => void;
  setAccord: React.Dispatch<React.SetStateAction<boolean>>;
}

const Restart: FC<Props> = memo(({setTool, setAccord}) => {
  return (
    <div
      className="itemContainer"
      onClick={() => {
        setTool('');
        setAccord(false)
      }}>restart</div>

    // <div onClick={() => {
    //       setTool('');
    //       setAccord(false)
    //     }}>
    //   <p className="btn2 restart">RESTART</p>
    // </div>
);
});

export default Restart;
