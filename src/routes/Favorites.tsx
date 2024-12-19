import { FunctionComponent } from 'react';
import { useFavoriteMovies } from '../context/consumer';
import { Link } from 'react-router-dom';

const Favorites: FunctionComponent = () => {
  const { favoriteMovies, addFavorite, removeFavorite } = useFavoriteMovies();

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {favoriteMovies.map((movie) => (
        <li key={movie.imdbID} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col">
            <img className="h-48 mx-auto mt-4" src={movie.Poster} />
            <div className="p-4">
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{movie.Title}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-sm">{movie.Year}</dd>
              </dl>
            </div>
            <div className="p-4 flex justify-between">
              <Link to={`/favorite/${movie.imdbID}`} className='text-amber-500 flex-1'>
                <span>Edit</span>
              </Link>
              <button
                className="text-red-500 flex-1"
                onClick={() => removeFavorite(movie)}
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Favorites;
