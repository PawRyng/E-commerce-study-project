import React, { createContext, useReducer, useContext } from 'react';

const actionTypes = {
  SET_VARIABLE: 'SET_VARIABLE',
};

// Początkowy stan
const initialState = {
  token: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_VARIABLE:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setToken = (value) => {
    dispatch({ type: actionTypes.SET_VARIABLE, payload: value });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        setToken,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
