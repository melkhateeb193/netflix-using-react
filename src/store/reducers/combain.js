import { combineReducers } from 'redux'
import MoviesReducer from './firestore'
import ListReducer from './ListReducer'


const rooteReducer = combineReducers({
    movies: MoviesReducer,
    moviesList:ListReducer,
})

export default rooteReducer