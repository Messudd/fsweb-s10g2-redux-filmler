import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

export const reducers = combineReducers({
    movie_reducer : movieReducer,
    favorite_reducer : favoriteReducer
})

export default reducers;