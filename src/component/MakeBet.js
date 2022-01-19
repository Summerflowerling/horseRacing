import React, { useEffect, useState } from 'react';
import { useBetAmount } from '../Context/BetAmountConext';

export const MakeBet = () => {
  const [horseBetting, setHorseBetting] = useState(0);
  const totalBet = useBetAmount();
  const [click, setClick] = useState(false);

  const increase = () => {
    if (horseBetting > 9) {
      alert('No more than USD10 for each bet');
      return;
    }
    setClick(true);
    if (!click) {
      alert('Not ready yet');
      return;
    }
    setHorseBetting((preValue) => preValue + 1);

    totalBet.setTotalAmount((pre) => pre + 1);
    console.log(totalBet);
    // TODO: value not cating up when pressing button
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
