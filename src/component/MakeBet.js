import React, { useState } from 'react';

export const MakeBet = () => {
  const [betting, setBetting] = useState(2);
  return (
    <div className='bettingFlex'>
      <button className='button'>&#43;</button>
      <p>{betting}</p>
      <button className='button'>&minus;</button>
    </div>
  );
};
