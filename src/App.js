import React, { useEffect } from 'react';
import getMovies from './services/tmdb';

export default function App() {

  useEffect(() => {
    const load = async () => {
      const req = await getMovies();
      console.log('Passou por aqui', req);
    }

    load();
  }, [])

  return (
    <h1>Projeto Netflix</h1>
  );
}

