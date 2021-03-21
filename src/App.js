import React, { useEffect, useState } from 'react';
import {getMovies, getMovieInfo} from './services/tmdb';
import MovieSection from './components/movieSection';
import FeaturedMovie from './components/featuredMovie'

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    //Fetch na Api para buscar todas as listas de filmes
    async function fetchAPI() {
      let req = await getMovies();
      setMovieList(req);      

    // Escolhe um filme aleatório da Netflix
      let originals = req.filter(i => i.slug === 'originals');
      let originalsMovies = originals[0].items[0].results;
      let randomChosen = Math.floor(Math.random() * (originalsMovies.length - 1));
      let chosen = originalsMovies[randomChosen];
      let chosenMovieInfo = await getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenMovieInfo);
  }

  fetchAPI()
  }, [])

  return(
        <div>
          {featuredData && <FeaturedMovie item={featuredData}/>} 
            <section>
              {movieList.map((item, key) => (
                  <MovieSection key={key} title={item.title} items={item.items}/>      
              ))}
            </section>
        </div>
  )
}

