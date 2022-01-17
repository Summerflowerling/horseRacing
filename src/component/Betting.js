import React, { useState } from 'react';

export const Betting = () => {
  const [betting, setBetting] = useState(2);
  return (
    <div>
      <p>{betting}</p>
    </div>
  );
};
