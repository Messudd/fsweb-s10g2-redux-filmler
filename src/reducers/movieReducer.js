import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (parseInt(action.payload) !== item.id))
      }
    case ADD_MOVIE:
      if(action.payload.title.length > 0 && action.payload.director.length >0 && action.payload.description.length>0){
        return {
          ...state,
          movies: [...state.movies, action.payload]
        }
      }
      else alert('formu boş - gecmeyelim :) ');
    default:
      return state;
  }
}

export default reducer;