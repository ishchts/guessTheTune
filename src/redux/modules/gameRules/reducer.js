import types from './types';

const initialState = {
  mistakes: 3,
  currentQuestion: -1,
  userOfErrors: 0,
  timeInMinutes: 5,
  timeInSeconds: 300,
  isFailTime: false,
};

const gameRules = (state = initialState, action) => {
  switch (action.type) {
    case types.STEP_NEXT :
      const {
        currentQuestion,
      } = state;
      const {
        payload: {
          questionsLength,
        }
      } = action;

      const nextStep = currentQuestion >= (questionsLength - 1) ? 0 : currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextStep,
      }

    case types.GENGE_USER_ANSWER:
      const {
        payload: {
          userAnaswer,
          rightAnswer,
          answers
        }
      } = action;

      const countRightAnswer = answers.reduce((acc, el) => (
        el.genre === rightAnswer ? acc + 1 : acc
      ), 0);

      const mapRightAnswer = userAnaswer.map((el) => {
        if (answers[el].genre === rightAnswer) {
          return true;
        }
        return false;
      });

      const isEveryRight = mapRightAnswer.every(el => el);

      const notError = isEveryRight && mapRightAnswer.length === countRightAnswer;
      const userOfErrors = notError ? state.userOfErrors :  state.userOfErrors + 1

      return {
        ...state,
        userOfErrors,
      }

    case types.QUESTIONS_RESET :
      return {
        ...state,
        currentQuestion: action.payload
      }

    case types.GAME_TIMER:
      const {
        timeInSeconds
      } = state;

      return {
        ...state,
        timeInSeconds: timeInSeconds -1,
      };

    case types.END_TIME:
      const {
        payload: {
          id
        }
      } = action;

      clearInterval(id);

      return {
        ...state,
        isFailTime: true,
      };

    case types.GAME_RESET:
      return {
        ...initialState
      }

    default:
      return state

  }
}

export default gameRules;