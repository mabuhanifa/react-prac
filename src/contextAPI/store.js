import { createContext, useContext, useReducer } from "react";
import { storeReducer } from "./reducer";

const Context = createContext();

const initialState = {
  products: [],
  cart: [0],
  counter: 0,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const store = { state, dispatch };
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const useStore = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("context is not found");
  }
  return context;
};

export const useDispatch = () => {
  return useContext(Context).dispatch;
};

export const useSelector = (fn) => {
  const { state } = useContext(Context);
  const selector = fn ? fn(state) : state;
  return selector;
};
