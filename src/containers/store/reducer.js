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
      // First way - res.push manipulates the original value OR add the new value to the existing array

      // const res = [...state.results];
      // res.push(state.counter);

      // return {
      //   ...state,
      //   results: res
      // };

      // *************************************

      // Second way - results.concat doesn't manipulate the existing array, but creates a new array and then adds our
      // value at the end (like push).

      return {
        ...state,
        results: state.results.concat(state.counter)
      };
    default:
      return state;
  }
};

export default reducer;
