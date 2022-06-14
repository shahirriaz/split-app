import React, { createContext, useContext, useReducer } from "react";

interface Props {
  children: React.ReactNode;
  initialState: Object;
  reducer: any;
}

// @ts-ignore
const AppContext = createContext<Array | null>(null);

const ScreenProvider: React.FC<Props> = ({
  initialState,
  reducer,
  children,
}) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export const useStateValue = () => useContext(AppContext);

export default ScreenProvider;
