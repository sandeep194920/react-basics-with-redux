const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  // Note that I havent added break statement to any case since it would be unreachable as I am returning the value in
  // each case.
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter })
        // id is added here so that we can use this in Counter.js in li for getting a unique key. This is just a temporary fix.
        // In real apps we might have more meaningful real IDs.
      };
    default:
      return state;
  }
};

export default reducer;
