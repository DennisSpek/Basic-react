import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';

const MovieCard: FunctionComponent = ({
  Title,
  Year,
  Poster,
  imdbID,
}: Partial<IMDBMovie>) => {
  return (
    <Link to={`/details/${imdbID}`}>
      <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="flex-1 flex flex-col">
          <img className="h-48 mx-auto mt-4" src={Poster} />
          <div className="p-4">
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{Title}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dd className="text-gray-500 text-sm">{Year}</dd>
            </dl>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default MovieCard;
