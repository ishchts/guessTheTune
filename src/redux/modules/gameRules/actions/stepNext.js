import types from "../types";

export const stepNext = (props) => (dispatch, getState) => {
  const {
    questions
  } = getState();

  return dispatch({
   type: types.STEP_NEXT,
   payload: {
     ...props,
     questionsLength: questions.length,
   },
  })
}