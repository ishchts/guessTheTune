import types from '../types';

export const gengeUserAnswer = (values) => ({
	type: types.GENGE_USER_ANSWER,
	payload: {
		...values
	},
});