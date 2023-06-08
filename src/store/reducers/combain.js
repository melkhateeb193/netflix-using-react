import { combineReducers } from 'redux'
import MoviesReducer from './firestore'


const rooteReducer = combineReducers({
    movies: MoviesReducer,
})

export default rooteReducer