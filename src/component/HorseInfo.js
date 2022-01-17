import React from 'react';
import { useState } from 'react';
import { Betting } from './Betting';

function HorseInfo() {
  const [bettingOdds, setBettingOdds] = useState(2);
  return (
    <div>
      <div className='flex horseInfo'>
        <h5>Horse Name</h5>
        <h5>Betting Odds</h5>
        <h5>Bet</h5>
      </div>

      <div className='flex horse'>
        <p>Sprite</p>
        <p>{bettingOdds}</p>
        <Betting />
      </div>

      <div className='flex horse'>
        <p>Thena</p>
        <p>{bettingOdds}</p>
        <Betting />
      </div>

      <div className='flex horse'>
        <p>Midnight</p>
        <p>{bettingOdds}</p>
        <Betting />
      </div>

      <div className='flex horse'>
        <p>Misty</p>
        <p>{bettingOdds}</p>
        <Betting />
      </div>
    </div>
  );
}

export default HorseInfo;
