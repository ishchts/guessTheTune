import types from './types';

const initialState = {
  mistakes: 3,
  numberOfErrors: 0,
  timeInMinutes: 5,
  currentQuestion: -1,
};

const gameRules = (state = initialState, action) => {

  switch (action.type) {

    case types.QUESTIONS_NEXT :
      const {
        currentQuestion,
      } = state;

      return {
        ...state,
        currentQuestion: currentQuestion + 1,
      }

    case types.GENGE_USER_ANSWER:
      const {
        payload: {
          replaceNumber,
          rightAnswer,
          answers
        }
      } = action;

      const checkAnswers = replaceNumber.every((el) => {
        return answers[el].genre === rightAnswer
      });

      const hasError = checkAnswers ? 0 : 1;

      return {
        ...state,
        numberOfErrors: state.numberOfErrors + hasError,
      }

    case types.QUESTIONS_RESET :
      return {
        ...state,
        currentQuestion: action.payload
      }


    default:
      return state

  }
}

export default gameRules;