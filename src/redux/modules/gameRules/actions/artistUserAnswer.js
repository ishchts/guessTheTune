import types from '../types';

export const artistUserAnswer = (values) => ({
	type: types.ARTIST_USER_ANSWER,
	payload: {
		...values
	},
});