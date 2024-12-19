import { FunctionComponent, useEffect, useState } from 'react';
import Toggle from '../components/Toggle';
import { useParams, useNavigate } from 'react-router-dom';
import GetMovie from '../lib/getMovie';
import { useFavoriteMovies } from '../context/consumer';
import Spinner from '../components/Spinner';

const Detail: FunctionComponent = () => {
  const { id } = useParams();
  const { favoriteMovies, addFavorite, removeFavorite } = useFavoriteMovies();
  const [ details, setDetails ] = useState<IMDBMovie | null>(null);
  const [ loading, setLoading ] = useState(false);
  const isFavorite = favoriteMovies.some((movie) => movie.imdbID === id);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      if(id){
        const data = await GetMovie(id);

        if(data) {
          setDetails(data);
        }
      }
      setLoading(false);
    })();
  }, [id]);

  const handleFavorite = () => {
    if(isFavorite) {
      removeFavorite(details);
    } else {
      addFavorite(details);
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {loading ? <Spinner /> : (
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div>
              <div className="w-full aspect-w-1 aspect-h-1">
                <img className="w-full h-full object-center object-cover sm:rounded-lg" src={details?.Poster}/>
              </div>
            </div>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <Toggle onClick={() => handleFavorite()} active={isFavorite}/>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {details?.Title}
              </h1>
              <div className="mt-3">
                <p className="text-3xl text-gray-900">{details?.Year}</p>
              </div>
              <div className="mt-3">
                <p className="text-xl text-gray-900">{details?.Actors}</p>
              </div>
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-gray-700 space-y-6">
                  <p>{details?.Plot}</p>
                </div>
              </div>
              <div className="mt-8 flex justify-between cursor-pointer" onClick={() => navigate(-1)}>Go back</div>
            </div>
          </div>
        )}  
      </div>
    </div>
  );
};

export default Detail;
