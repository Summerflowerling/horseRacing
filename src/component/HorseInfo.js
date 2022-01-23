import React from 'react';
import { useState } from 'react';
import { MakeBet } from './MakeBet';

function HorseInfo() {
  const [bettingOdds, setBettingOdds] = useState([
    { name: 'Sprite', bettingOdds: 2 },
    { name: 'Thene', bettingOdds: 2 },
    { name: 'Midnight', bettingOdds: 2 },
    { name: 'Misty', bettingOdds: 2 },
  ]);
  return (
    <div>
      <div className='flex horseInfo'>
        <h5 className='horseInfo-title'>Horse Name</h5>
        <h5 className='horseInfo-title'>Betting Odds</h5>
        <h5 className='horseInfo-title'>
          Bet <span>&#40;</span>USD<span>&#41;</span>
        </h5>
      </div>

      <div className='flex horse'>
        <p className='nameWidth'>Sprite</p>
        <p>{bettingOdds[0].bettingOdds}</p>
        <MakeBet />
      </div>

      <div className='flex horse'>
        <p className='nameWidth'>Thena</p>
        <p>{bettingOdds[0].bettingOdds}</p>
        <MakeBet />
      </div>

      <div className='flex horse'>
        <p className='nameWidth'>Midnight</p>
        <p>{bettingOdds[0].bettingOdds}</p>
        <MakeBet />
      </div>

      <div className='flex horse'>
        <p className='nameWidth'>Misty</p>
        <p>{bettingOdds[0].bettingOdds}</p>
        <MakeBet />
      </div>

    </div>
  );
}

export default HorseInfo;
