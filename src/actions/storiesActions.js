import { GET_ALL_STORIES } from '../constants/actionTypes';

const getStories = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_STORIES,
            payload: ['Anna', 'Vitaly']
        })
    }
}

export default getStories;
