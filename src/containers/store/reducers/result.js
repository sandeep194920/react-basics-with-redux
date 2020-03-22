import * as actionTypes from "../actions/actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  // Note that I havent added break statement to any case since it would be unreachable as I am returning the value in
  // each case.
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: action.result })
        // id is added here so that we can use this in Counter.js in li for getting a unique key. This is just a temporary fix.
        // In real apps we might have more meaningful real IDs.
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((res) => res !== action.value)
        // filter is similar to concat where a new array is created and doesnt not mutate existing array. Here, filter
        // creates a new array with the clicked element removed and we assign the new filtered array to the results of state.
        // Don't think that since we are using state.results.filter() we are mutating our state.results. That's not
        // true, as the filter actually creates another array and then assign that new array to the results.
      };
    default:
      return state;
  }
};

export default reducer;
