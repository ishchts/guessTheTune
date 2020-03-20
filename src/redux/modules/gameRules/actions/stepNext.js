import types from "../types";

export const stepNext = (props) => (dispatch, getState) => {
  console.log('stepNext');
  console.log(dispatch);
  console.log(getState());
  return {
    type: types.STEP_NEXT,
    payload: { ...props },
  }
}