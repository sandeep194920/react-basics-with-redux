import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utilities";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  // Note that I havent added break statement to any case since it would be unreachable as I am returning the value in
  // each case.
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};

export default reducer;
