import React from 'react';
import { useState } from 'react';

export const UserInfo = () => {
  const [credit, setCredit] = useState(0);
  return (
    <div>
      <div className='userFlex'>
        <h5>Avaliable Credit:</h5>
        <h5>{credit}</h5>
      </div>
    </div>
  );
};
