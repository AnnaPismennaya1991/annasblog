export default function storiesReducer(state = {}, action) {
    switch (action.type) {
        case 'GET_ALL_STORIES':
            return action.payload;
        default:
            return state;
    }
}
