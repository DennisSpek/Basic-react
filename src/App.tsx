import { useState } from 'react';

import Search from './components/Search';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchMovies from '/src/lib/searchMovies';

import Home from '/src/routes/Home';
import Detail from '/src/routes/Detail';
import Edit from '/src/routes/Edit';
import Favorites from '/src/routes/Favorites';

const App = () => {
  const [list, setList] = useState<MovieArray | []>([]);

  const searchHandler = async (e: string) => {
    const result = await SearchMovies(e);

    console.log('result', result);

    if (result) {
      setList(result.Search);
    }
  };

  return (
    <div className="min-h-full">
      <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center">
                <a href="#">MovieDB</a>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <Search onSearch={searchHandler} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <nav
              aria-label="Sidebar"
              className="sticky top-4 divide-y divide-gray-300"
            >
              <div className="pb-8 space-y-1 flex flex-col gap-1">
                <Link to={`/`}>
                  <div className='bg-gray-300 rounded p-2'>
                    Home
                  </div>
                </Link>
                <Link to={`/favorite`}>
                  <div className='bg-gray-300 rounded p-2'>Favorites</div>
                </Link>
              </div>
            </nav>
          </div>
          <main className="lg:col-span-9">
            <Routes>
              <Route path="/" element={<Home results={list} />} />
              <Route path="/details/:id" element={<Detail />} />
              <Route path="/favorite" element={<Favorites />} />
              <Route path="/favorite/:id" element={<Edit />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
