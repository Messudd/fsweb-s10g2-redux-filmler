import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
  const favorites = useSelector((store) => store.favorite_reducer.dizi);
  const dispatch = useDispatch();

  const removeFavoriteMovie = (value) => {
    dispatch(removeFavorite(value));
  }

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className='font-bold'>Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {
          favorites.map(movie => (
            <Link key={movie.id} className="py-1 flex gap-2 justify-between" to={`/movies/${movie.id}`}>
              {movie.title}
              <span className="material-icons hover:text-red-600 text-[18px]" onClick={() => removeFavoriteMovie(movie.id)}>remove_circle</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
}


export default FavoriteMovieList;