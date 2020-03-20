import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import gameRules from './modules/gameRules/reducer';
import questions from "./modules/questions/reducer";

const rootReducer = combineReducers({
  gameRules,
  questions,
  form: formReducer
});

export default rootReducer