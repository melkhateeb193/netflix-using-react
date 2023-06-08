import { combineReducers } from 'redux'
import MoviesReducer from './firestore'
import ListReducer from './ListReducer'
import changeLoader from './loader'


const rooteReducer = combineReducers({
    movies: MoviesReducer,
    moviesList:ListReducer,
    loader:changeLoader,

})

export default rooteReducer