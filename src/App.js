import React, { useEffect, useState, Fragment } from 'react';
import getMovies from './services/tmdb';
import MovieSection from './components/movieSection';
import { GlobalStyle } from './styles';

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
                <div>
                  <MovieSection key={key} title={item.title} items={item.items}/>
                </div>
              ))}
            </section>
        </div>
  )
}

