import React, { useState, useContext } from 'react';

const BetAmountContext = React.createContext();

export function useBetAmount() {
  return useContext(BetAmountContext);
}

const BetAmountConextProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <BetAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}
    </BetAmountContext.Provider>
  );
};

export default BetAmountConextProvider;
