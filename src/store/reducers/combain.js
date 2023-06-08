import { combineReducers } from 'redux'
import MoviesReducer from './firestore'
import moviesReducer from './movies'


const rooteReducer = combineReducers({
    movies: MoviesReducer,
    moviedb: moviesReducer,
})

export default rooteReducer