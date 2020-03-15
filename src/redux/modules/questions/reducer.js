import * as mockQuestions from './../../../mocks/questions';
import types from "./types";

const questions = (state = mockQuestions.questions, action) => {

  switch (action.type) {
    default:
      return state;
  }

}

export default questions