import React, { useState } from 'react';

export const MakeBet = () => {
  const [horseBetting, setHorseBetting] = useState(0);

  const increase = () => {
    setHorseBetting((preValue) => preValue + 1);
  };

  const decrease = () => {
    if (horseBetting < 1) return;
    setHorseBetting((preValue) => preValue - 1);
  };
  return (
    <div className='bettingFlex'>
      <button className='button' onClick={increase}>
        &#43;
      </button>
      <p>{horseBetting}</p>
      <button className='button' onClick={decrease}>
        &minus;
      </button>
    </div>
  );
};
