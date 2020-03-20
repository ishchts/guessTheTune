import { createStore, applyMiddleware } from 'redux';

import rootReducer from "./rootReducer";


const logger = (store) => next => action => {
  const {dispatch, getState} = store;
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

