import types from './types';


const initialState = {
	loading: true,
	success: null,
	error: null,
	data: [],
}

const questions = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_QUESTION_FETCH: {
			return {
				...state,
				loading: true,
			};
		}
		case types.GET_QUESTION_SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
				data: [...action.payload]
			};
		}
		case types.GET_QUESTION_FAIL: {
			return {
				...state,
				loading: false,
				error: true,
			};
		}

		default: {
			return state;
		}
	}

};

export default questions;