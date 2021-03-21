import React, { useEffect, useState } from 'react';
import getMovies from './services/tmdb';
import MovieSection from './components/movieSection';

export default function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    async function fetchAPI() {
      let req = await getMovies();
      setMovieList(req);      
  }

  fetchAPI()
  }, [])

  return(
        <div>
            <section>
              {movieList.map((item, key) => (
                  <MovieSection key={key} title={item.title} items={item.items}/>      
              ))}
            </section>
        </div>
  )
}

