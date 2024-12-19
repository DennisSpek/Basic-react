import React, { createContext, useState, ReactNode, useContext } from 'react';

interface propsI {
  favoriteMovies: IMDBMovie[];
  addFavorite: (movie: IMDBMovie) => void;
  removeFavorite: (movie: IMDBMovie) => void;
  editFavorite: (data: Partial<IMDBMovie>, id: string) => void;
}

export const FavoriteMoviesContext = createContext<propsI>({
  favoriteMovies: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  editFavorite: () => {},
});

export const useFavoriteMovies = () => useContext(FavoriteMoviesContext);
