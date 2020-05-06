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
		case types.STEP_NEXT : {
			const { 
				currentQuestion
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
			};
		}

		case types.GENGE_USER_ANSWER: {
			const {
				payload: {
					answers,
					rightGenre,
					userAnswer,
				}
			} = action;

			const allRightAnswers = answers.filter(item => item.genre === rightGenre);

			const allUserAnswer = Object.keys(userAnswer)
				.filter(el => userAnswer[el])
				.map(str => {
					const responseIndex = parseInt(str.replace(/[^0-9]/gim,''), 10);
					return answers[responseIndex];
				});

			const everyRight = allUserAnswer.every(item => item.genre === rightGenre);
			const isLengthEqual = allRightAnswers.length === allUserAnswer.length;

			const userOfErrors = everyRight && isLengthEqual ? state.userOfErrors :  state.userOfErrors + 1;

			return {
				...state,
				userOfErrors,
			};
		}
		case types.ARTIST_USER_ANSWER: {
			const {
				payload: {
					userAnswer,
					answers,
					rightArtist
				}
			} = action;

			const responseIndex = parseInt(userAnswer.replace(/[^0-9]/gim,''), 10);
			const {
				artist
			} = answers[responseIndex];

			const userOfErrors = artist === rightArtist ? state.userOfErrors :  state.userOfErrors + 1;

			return {
				...state,
				userOfErrors,
			};
		}

		case types.QUESTIONS_RESET : {
			return {
				...state,
				currentQuestion: action.payload
			};
		}

		case types.GAME_TIMER: {
			const {
				timeInSeconds
			} = state;

			return {
				...state,
				timeInSeconds: timeInSeconds -1,
			};
		}

		case types.END_TIME: {
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
		}

		case types.GAME_RESET: {
			return {
				...initialState
			};

		}

		default: {
			return state;
		}

	}
};

export default gameRules;