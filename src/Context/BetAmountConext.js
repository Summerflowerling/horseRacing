import React, { useState, useContext, useRef } from 'react';

const BetAmountContext = React.createContext();

export function useBetAmount() {
  return useContext(BetAmountContext);
}

const BetAmountConextProvider = ({ children }) => {
  const totalAmount = useRef(0);

  return (
    <BetAmountContext.Provider value={totalAmount}>
      {children}
    </BetAmountContext.Provider>
  );
};

export default BetAmountConextProvider;
