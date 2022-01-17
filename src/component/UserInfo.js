import React from 'react';
import { useState } from 'react';

export const UserInfo = () => {
  const [credit, setCredit] = useState(10000);
  return (
    <div>
      <div className='flex userInfo'>
        <h5>Avaliable Credit: NTD</h5>
        <h5>{credit}</h5>
      </div>
    </div>
  );
};
