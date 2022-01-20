import React, { useState, useRef } from 'react';
import { useBetAmount } from '../Context/BetAmountConext';

export const MakeBet = () => {
  const [horseBetting, setHorseBetting] = useState(0);
  const totalBet = useBetAmount();

  const increase = () => {
    if (horseBetting > 9) {
      alert('No more than USD10 for each bet');
      return;
    }
    //To make sure the value is updated as soon as the button is clicked.
    const newIncrease = horseBetting + 1;
    setHorseBetting(newIncrease);
    //use useRef to keep persistent between each render
    totalBet.current = totalBet.current + 1;
  };

  const decrease = () => {
    if (horseBetting < 1) return;
    const newDecrease = horseBetting - 1;
    setHorseBetting(newDecrease);
    totalBet.current = totalBet.current - 1;
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
