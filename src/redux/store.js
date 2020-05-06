import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

const logger = (store) => next => action => {
	const {dispatch, getState} = store;
	if (typeof action === 'function') {
		return action(dispatch, getState);
	}

	return next(action);
};

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;

