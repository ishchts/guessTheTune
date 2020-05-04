import types from '../types';

export const gameTimer = (props) => ({
	type: types.GAME_TIMER,
	payload: { ...props }
});