import React, { useContext, useReducer } from 'react';

const BetAmountContext = React.createContext();

export function useBetAmount() {
  return useContext(BetAmountContext);
}

function reducer(countState, action) {
  switch (action.type) {
    case 'increment':
      return { count: countState.count + 1 };
    case 'decrement':
      return { count: countState.count - 1 };
    default:
      return countState;
  }
}

const BetAmountConextProvider = ({ children }) => {
  const [countState, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <BetAmountContext.Provider value={{ countState, dispatch }}>
      {children}
    </BetAmountContext.Provider>
  );
};

export default BetAmountConextProvider;
