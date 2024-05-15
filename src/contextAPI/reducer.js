export const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "reduce":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "fetchData":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
