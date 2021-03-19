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
      items: [await baseFetch(`/discover/tv?with_network=213&${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: [await baseFetch(`/trending/all/week?${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'topRated',
      title: 'Em alta',
      items: [await baseFetch(`/movie/top_rated?${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'action',
      title: 'Ação',
      items: [await baseFetch(`/discover/movie?with_genres=28&${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: [await baseFetch(`/discover/movie?with_genres=35&${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: [await baseFetch(`/discover/movie?with_genres=27&${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: [await baseFetch(`/discover/movie?with_genres=10749&${language}&api_key=${API_KEY}`)]
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: [await baseFetch(`/discover/movie?with_genres=99&${language}&api_key=${API_KEY}`)]
    }
  ];
}