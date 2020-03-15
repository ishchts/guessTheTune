import types from "../types";

export const nextQuestion = (props) => {
  return {
    type: types.QUESTIONS_NEXT,
    payload: { ...props },
  }
}