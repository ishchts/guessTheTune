import types from '../types';

export const resetQuestion = () => {
	return {
		type: types.QUESTIONS_RESET,
		payload: -1,
	};
};
