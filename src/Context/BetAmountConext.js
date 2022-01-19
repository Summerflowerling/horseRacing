import React, { useState, useContext } from 'react';

const BetAmountContext = React.createContext();

export function useBetAmount() {
  return useContext(BetAmountContext);
}

const BetAmountConextProvider = ({ children }) => {
  const [test, setTest] = useState(100);
  return (
    <BetAmountContext.Provider value={test}>
      {children}
    </BetAmountContext.Provider>
  );
};

export default BetAmountConextProvider;
