
const INTIAL_STATE = {
    movies: [],
};

export default function MoviesReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ALL_MOVIES':
            return {
                ...state,
                movies: action.payload,
            }
        default:
            return state;
    }
}