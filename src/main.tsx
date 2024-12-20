import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteMoviesProvider } from './context/provider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteMoviesProvider>
        <App />
      </FavoriteMoviesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
