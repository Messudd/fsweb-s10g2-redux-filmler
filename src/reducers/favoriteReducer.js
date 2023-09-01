import { TOGGLE_FAVORITES,ADD_FAVORITE,REMOVE_FAVORITE } from '../actions/favoritesActions';

const filmListInitialState = {
    dizi :  [],
    durum : false
};


const favoriteReducer = (state = filmListInitialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
        if(state.dizi.length === 0) {
            return {...state, dizi:[...state.dizi, action.payload]};
        }
        else {
            if(state.dizi.filter((content) => content.id === action.payload.id).length>0){
               alert('Bu film zaten favorilerde !'); }
            else  return {...state, dizi:[...state.dizi, action.payload]};
        } 
    case REMOVE_FAVORITE:
        return {...state, dizi: state.dizi.filter((content) => content.id !== action.payload)};
       
    case TOGGLE_FAVORITES:
        return  {...state, durum: !(state.durum)};
    default:
      return state;
  }
}

export default favoriteReducer;