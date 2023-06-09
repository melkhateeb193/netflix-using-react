import { combineReducers } from 'redux'
import MoviesReducer from './firestore'
import MoviesReducerdb from './movies'
import LoaderReducer from './loader'


const rooteReducer = combineReducers({
    loader: LoaderReducer,
    movies: MoviesReducer,
    moviesdb: MoviesReducerdb
})

export default rooteReducer