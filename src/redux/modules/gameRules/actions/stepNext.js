import types from "../types";

export const stepNext = (props) => {
  return {
    type: types.STEP_NEXT,
    payload: { ...props },
  }
}