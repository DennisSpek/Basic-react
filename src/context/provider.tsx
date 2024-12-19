import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { FavoriteMoviesContext } from './consumer';

export const FavoriteMoviesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMDBMovie[]>([]);

  const addFavorite = (movie: IMDBMovie) => {
    setFavoriteMovies(prevState => [...prevState, movie]);
  };

  const removeFavorite = (movie: IMDBMovie) => {
    setFavoriteMovies(prevState => prevState.filter((item) => item.imdbID !== movie.imdbID));
  };

  const editFavorite = (movie: Partial<IMDBMovie>, id: string) => {
    const oldItem = favoriteMovies.find((item) => item.imdbID === id);

    const updatedItem = { ...oldItem, ...movie };

    setFavoriteMovies(prevState =>
      prevState.map(item =>
        item.imdbID === id ? updatedItem : item
      )
    );
  };

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, addFavorite, removeFavorite, editFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export const useFavoriteMovies = () => {
  const context = useContext(FavoriteMoviesContext);
  if (context === undefined) {
    throw new Error('useFavoriteMovies must be used within a FavoriteMoviesProvider');
  }
  return context;
};