import { GET_ALL_STORIES } from '../constants/actionTypes';
import axios from 'axios';

const getStories = () => {
    return (dispatch) => {
        axios.get('https://annasblog-bdd5b.firebaseio.com/stories.json').then((result) => {
            dispatch({
                type: GET_ALL_STORIES,
                payload: result.data
            })
        })
    }
}

export default getStories;
