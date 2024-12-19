import MovieCard from '/src/components/MovieCard';
interface HomeI {
  results: MovieArray | [];
}

const Home = ({ results }: HomeI) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {results.length == 0 && <p>No movies found</p>}
      {results.map((_, i) => (
        <MovieCard key={i} {..._} />
      ))}
    </ul>
  );
};

export default Home;
