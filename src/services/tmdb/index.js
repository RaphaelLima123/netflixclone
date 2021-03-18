const API_KEY = '95cfdaa5a5bb42d215c7791c102ee168';
const API_BASE = 'https://api.themoviedb.org/3';
const language = 'language=pt-BR';

const baseFetch = async (endpoint) => {
  const firstFetch = await fetch(`${API_BASE}${endpoint}`);
  const json = await firstFetch.json();
  return json;
}

export default async function getMovies () {
  return [
    {
      slug: 'originals',
      title: 'Originais Netflix',
      items: [await baseFetch(`/movie/550?api_key=${API_KEY}`)]
    }
  ];
}