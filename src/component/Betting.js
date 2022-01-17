import React, { useState } from 'react';

export const Betting = () => {
  const [betting, setBetting] = useState(0);
  return <div>{betting}</div>;
};
