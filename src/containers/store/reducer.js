const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  // the dispatched actions in the components can be handled here using action argument.
  if (action.type === "INCREMENT") {
    return {
      // this return object must be a state (modified or new one)
      counter: state.counter + 1
    };
  }
  return state;
};

export default reducer;
