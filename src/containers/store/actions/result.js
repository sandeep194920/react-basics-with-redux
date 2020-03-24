import * as actionTypes from "./actionTypes";

export const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: value
  };
};

export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log("CALLED");
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (value) => {
  return {
    type: actionTypes.DELETE_RESULT,
    value: value
  };
};
