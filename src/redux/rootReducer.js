import { combineReducers } from 'redux'

const initialState = {
  mistakes: 3,
  timeInMinutes: 5,
};

const gameRules = (state = initialState, action) => {
  return state
}


const rootReducer = combineReducers({
  gameRules
});

export default rootReducer