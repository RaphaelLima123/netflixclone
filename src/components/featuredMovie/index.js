import React from 'react';
import { 
  ButtonArea,
  ButtonSave,
  ButtonWatch,
  FeaturedMovieSection, 
  HorizontalFeatured, 
  TitleArea, 
  VerticalFeatured,
  MovieDescription,
  MovieGenres,
  MovieInfo,
  MovieRated,
  MovieSeasons,
  MovieYear
} from './styles';

const urlBase = 'https://image.tmdb.org/t/p/original';

function plural(seasonNumber) {
  if(seasonNumber !== 1) {
    return 's'
  } else {
    return '';
  }
}

export default function FeaturedMovie({item}) {

  let firstDate = new Date(item.first_air_date);

  return (
    <FeaturedMovieSection url={`${urlBase}${item.backdrop_path}`}>
      <VerticalFeatured>
        <HorizontalFeatured>
          <TitleArea>{item.original_name}</TitleArea>
          <MovieInfo>
            <MovieRated>{item.vote_average} pontos</MovieRated>
            <MovieYear>{firstDate.getFullYear()}</MovieYear>
            <MovieSeasons>{item.number_of_seasons} temporada{plural(item.number_of_seasons)}</MovieSeasons>
          </MovieInfo>
          <MovieDescription>{item.overview}</MovieDescription>
          <ButtonArea>
            <ButtonWatch/>
            <ButtonSave/>
          </ButtonArea>
          <MovieGenres>Gêneros: </MovieGenres>
        </HorizontalFeatured>
      </VerticalFeatured>   
    </FeaturedMovieSection>
  );
}
