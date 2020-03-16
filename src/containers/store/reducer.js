const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  // Note that I havent added break statement to any case since it would be unreachable as I am returning the value in
  // each case.
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    case "ADD":
      return {
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.value
      };
    default:
      return state;
  }
};

export default reducer;
