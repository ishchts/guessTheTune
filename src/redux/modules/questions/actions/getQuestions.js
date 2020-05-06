import types from '../types';
import api from '../../../../API/api';
import mockQuestions from '../mocks/questions';

export const getQuestions = () => async (dispatch, getState) => {
    dispatch({
        type: types.GET_QUESTION_FETCH
    });
    try {
        const { data } = await api.get('/questions');
        setTimeout(() => {
            dispatch({
                type: types.GET_QUESTION_SUCCESS,
                payload: mockQuestions
            });
            return Promise.resolve(mockQuestions);
        }, 1000);

    } catch(e) {
        dispatch({
            type: types.GET_QUESTION_FAIL,
        });
        console.error('getQuestions error');
        throw(e)
    }
    
}