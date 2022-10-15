import React, { useReducer } from "react";
import { textReducer, textState } from "./genericReducer";

const reduceReducer = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  );

const combinedReducer = reduceReducer(
    textReducer
)


const initialState = {
  ...textState
};

const store = React.createContext({
  state: {
    textValue: "",
  },
  dispatch: () => {},
});


const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
