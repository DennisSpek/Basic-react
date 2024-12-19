import { FunctionComponent, useState, useEffect } from 'react';
import { useFavoriteMovies } from '../context/consumer';
import { useParams, useNavigate } from 'react-router-dom';

const Edit: FunctionComponent = () => {
  const [movie, setMovie] = useState<IMDBMovie | null>(null);
  const [formData, setFormData] = useState({
    Title: '',
    Year: '',
    Actors: '',
  });
  const { id } = useParams();
  const { favoriteMovies, editFavorite } = useFavoriteMovies();
  const navigate = useNavigate();

  useEffect(() => {
    const movie = favoriteMovies.find((movie) => movie.imdbID === id);

    if (movie) {
      setMovie(movie);
      setFormData({
        Title: movie.Title,
        Year: movie.Year,
        Actors: movie.Actors,
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editFavorite(formData, id);
    navigate(-1);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img className="w-full h-full object-center object-cover sm:rounded-lg" src={movie?.Poster}/>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    name="Title"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.Title}
                    onChange={handleChange}
                    placeholder={movie?.Title}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    name="Year"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.Year}
                    onChange={handleChange}
                    placeholder={movie?.Year}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    name="Actors"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.Actors}
                    onChange={handleChange}
                    placeholder={movie?.Actors}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
